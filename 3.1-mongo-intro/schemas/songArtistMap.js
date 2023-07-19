import { Schema } from "mongoose";

const songArtistSchema = new Schema({ 
    songId: {type: Schema.Types.ObjectId, ref: "Song"},
    artistId: {type: Schema.Types.ObjectId, ref: "Artist"}
}, {
    collection:'SongArtistMap',
    versionKey: false
});

export default songArtistSchema;