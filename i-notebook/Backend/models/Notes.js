const { type } = require("@testing-library/user-event/dist/type");
const mongoose = require("mongoose");
const user = require("./user");
const { Schema } = mongoose;

const NotesSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: {
        type: String,
        require: true
    },
    discription: {
        type: String,
        require: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
    tag : {
        type: String,
    }
});

module.exports = mongoose.model('notes',NotesSchema);   // in inotebook database notes collection can creat