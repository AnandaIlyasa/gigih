import { Schema } from "mongoose";

const popularSongSchema = new Schema({ 
    songId: {type: Schema.Types.ObjectId, ref: "Song"},
    playCount: Schema.Types.Number,
    period: Schema.Types.Number
}, {
    collection:'PopularSong',
    versionKey: false
});

export default popularSongSchema;