import { Schema } from "mongoose";

const songSchema = new Schema({ 
    title: Schema.Types.String,
    album: Schema.Types.String,
}, {
    collection:'Song',
    versionKey: false
});

export default songSchema;