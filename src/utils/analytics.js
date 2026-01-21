const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// Track page view (call on route change or initial load)
export const trackPageView = async (page) => {
    try {
        await fetch(`${API_URL}/api/analytics/pageview`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                page: page || window.location.pathname,
                referrer: document.referrer
            })
        });
    } catch (error) {
        // Silent fail for analytics
        console.debug('Analytics tracking failed:', error);
    }
};
