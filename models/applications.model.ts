import mongoose, { Schema } from "mongoose";


const applicationSchema = new Schema({
    job: {
        type: Schema.Types.ObjectId,
        ref: "Job",
        required: [true, "job is required!"],
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: [true, "user is required!"],
    },
    cover_letter: {
        type: String,
    },
    resume_url: {
        type: String,
        required: [true, "Resume is required!"],
    },
    status: {
        type: String,
    },
}, {timestamps: true})


export const Application = mongoose.model('Application', applicationSchema)