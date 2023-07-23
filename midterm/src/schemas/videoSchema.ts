import { model, Schema } from "mongoose";
import Video from "../models/video";

const videoSchema = new Schema({
    embedUrl: {
        type: Schema.Types.String,
        required: true,
    },
    thumbnailUrl: {
        type: Schema.Types.String,
        required: true,
    }
});

export default model<Video>('videos', videoSchema);