const mongoose = require('mongoose');

const postSchema= new mongoose.Schema({
    title:{
       type: String,
       required:[true, 'title is required'] 
    },
    description:{
        type: String,
        required:[true, 'description is required']
    },
    image:{
        type: String,
        required:[true, 'image link is required']
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref:"User",
        require:[true, "user id is required"],
    }
}, {timestamps: true});

const postModel= mongoose.model('Post', postSchema);

module.exports= postModel;