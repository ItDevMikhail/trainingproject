import mongoose from "mongoose";

const Books = new mongoose.Schema({
    id: {type: Number, required: true},
    name: {type: String, required: true},
    description: {type: String, required: true}, 
})

export default mongoose.model('Books', Books)