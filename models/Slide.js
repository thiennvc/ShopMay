
import mongoose from 'mongoose';

const SlideSchema = new mongoose.Schema({
    title: String,
    subtitle: String,
    image: {
        type: String,
        required: true,
    },
}, { timestamps: true });

export default mongoose.models.Slide || mongoose.model('Slide', SlideSchema);
