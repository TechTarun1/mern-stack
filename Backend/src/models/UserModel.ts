import mongoose, { Schema } from "mongoose";

const User: Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
},
    { collection: 'user-data' }
)

export default mongoose.model("UserData", User);