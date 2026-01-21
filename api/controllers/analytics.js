import crypto from 'crypto';
import PageView from '../models/PageView.js';

// @desc    Track page view
// @route   POST /api/analytics/pageview
// @access  Public
export const trackPageView = async (req, res) => {
    try {
        const { page, referrer } = req.body;

        const ipHash = crypto
            .createHash('sha256')
            .update(req.ip + (process.env.MONGODB_URI || 'salt'))
            .digest('hex')
            .substring(0, 16);

        await PageView.create({
            page: page || '/',
            referrer: referrer || req.get('Referer'),
            userAgent: req.get('User-Agent'),
            ipHash
        });

        res.status(201).json({ success: true });
    } catch (error) {
        res.status(200).json({ success: true });
    }
};

// @desc    Get analytics summary (Admin)
// @route   GET /api/analytics/summary
// @access  Private
export const getAnalyticsSummary = async (req, res) => {
    try {
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const thisWeek = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
        const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1);

        const totalViews = await PageView.countDocuments();
        const todayViews = await PageView.countDocuments({ createdAt: { $gte: today } });
        const weekViews = await PageView.countDocuments({ createdAt: { $gte: thisWeek } });
        const monthViews = await PageView.countDocuments({ createdAt: { $gte: thisMonth } });

        const uniqueVisitors = await PageView.distinct('ipHash', {
            createdAt: { $gte: thisMonth }
        });

        const topPages = await PageView.aggregate([
            { $group: { _id: '$page', count: { $sum: 1 } } },
            { $sort: { count: -1 } },
            { $limit: 5 }
        ]);

        res.status(200).json({
            success: true,
            data: {
                totalViews,
                todayViews,
                weekViews,
                monthViews,
                uniqueVisitorsThisMonth: uniqueVisitors.length,
                topPages
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server error'
        });
    }
};
