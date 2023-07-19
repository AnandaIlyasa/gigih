import { Schema } from "mongoose";

const songSchema = new Schema({ 
    title: Schema.Types.String,
    album: Schema.Types.String,
});

export default songSchema;