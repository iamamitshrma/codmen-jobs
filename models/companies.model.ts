import mongoose, { Schema } from "mongoose";


const companySchema = new Schema({
    name: {
        type: String,
        required: [true, "Company name is required!"],
        index: true
    },
    description: {
        type: String,
        required: [true, "Company description is required!"],
        index: true
    },
    email: {
        type: String,
        required: [true, "Email is required!"],
        unique: true,
        lowercase: true,
        trim: true,
    },
    logo: {
        type: String,
        required: [true, "Logo is required!"],
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    yearlyTurnover: {
        type: Number,
        default: 0
    },
    address: {
        type: String,
        required: [true, "Address is required!"],
    }
}, {timestamps: true})


export const Company = mongoose.model('Company', companySchema)