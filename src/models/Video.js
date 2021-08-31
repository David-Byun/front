import mongoose from "moogoose";

const videoSchema = new mongoose.Schema({
    title: String,
    description: String,
    createdAt: Date,
})
