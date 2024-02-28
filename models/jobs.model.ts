import mongoose, { Schema } from "mongoose";


const jobSchema = new Schema({
    title: {
        type: String,
        required: [true, "Company name is required!"],
        index: true
    },
    description: {
        type: String,
        required: [true, "Company description is required!"],
    },
    location: {
        type: String,
        required: [true, "Location is required!"],
    },
    type: {
        type: String,
        required: [true, "Type is required!"],
        enum: ["full-time", "part-time", "contract", "freelance"]
    },
    category: {
        type: String,
        required: [true, "Category is required!"]
    },
    company: {
        type: Schema.Types.ObjectId,
        ref: "Company"
    },
    is_active: {
        type: Boolean,
        default: true,
        required: true,
    }
}, {timestamps: true})


export const Job = mongoose.model('Job', jobSchema)