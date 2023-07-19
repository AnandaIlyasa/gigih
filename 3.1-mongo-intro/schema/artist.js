import { Schema } from "mongoose";

const artistSchema = new Schema({ 
    name: Schema.Types.String,
    dateOfBirth: Schema.Types.Date,
    genres: [Schema.Types.String]
});

export default artistSchema;