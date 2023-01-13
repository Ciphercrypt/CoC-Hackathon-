const mongoose = require("mongoose");
const { Schema } = mongoose;

const JobPostingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    job_type: {
        type: String,
        enum: ['full-time', 'part-time', 'contract', 'internship'],
        required: true
    },
    salary: {
        type: Number,
    },
    experience: {
        type: String,
        enum: ['fresher', '1-3 years', '3-5 years', '5-10 years'],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    skills: {
        type: [String],
        required: true
    },
    posted_date: {
        type: Date,
        default: Date.now
    },
    last_date_to_apply: {
        type: Date,
        required: true
    },
    company_logo: {
        type: String,
    },
    company_website: {
        type: String,
    },
    company_email: {
        type: String,
    }
});

module.exports = mongoose.model("JobPosting", JobPostingSchema);
