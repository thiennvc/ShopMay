
import mongoose from 'mongoose';

const ImageSchema = new mongoose.Schema({
    title: String,
    category: {
        type: String,
        required: true,
    },
    src: {
        type: String,
        required: true,
    },
}, { timestamps: true });

export default mongoose.models.Image || mongoose.model('Image', ImageSchema);
