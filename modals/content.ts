import mongoose, { Document, Schema, Model } from 'mongoose';

interface IContent extends Document {
  textContent: string[]; 
}

const textSchema: Schema = new mongoose.Schema({
  textContent: {
    type: [String],
    default: [],
  },
}, { timestamps: true });

const Content: Model<IContent> = mongoose.model<IContent>('Content', textSchema);

export default Content;
