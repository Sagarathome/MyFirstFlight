const mongoose = require("mongoose");
const { Schema } = mongoose;

const NotesSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'

    },
    childname: {
        type: String,
        required: true
    },
    parentname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
   
    date: {
        type: Date,
        default: Date.now

    }

});

module.exports = mongoose.model("notes", NotesSchema)