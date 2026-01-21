import mongoose from 'mongoose';

const pageViewSchema = new mongoose.Schema({
    page: {
        type: String,
        required: true,
        trim: true
    },
    referrer: {
        type: String,
        trim: true
    },
    userAgent: String,
    ipHash: String,
    country: String,
    city: String
}, {
    timestamps: true
});

pageViewSchema.index({ createdAt: -1 });
pageViewSchema.index({ page: 1 });

export default mongoose.model('PageView', pageViewSchema);
