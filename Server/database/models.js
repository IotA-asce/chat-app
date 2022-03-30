const mongoose = require('mongoose');

const messageModel = new mongoose.Schema({
    author: {
        type: String,
        required: true
    }, 
    destination: {
        type: String,
        required: true
    }, 
    text: {
        type: String,
        required: true
    },
    image: {
        data: Buffer,
        contentType: String
    }
})

const userModel = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    connectedGroups: {
        type: Array,
        required: true
    },
    connectedUsers: {
        type: Array,
        required: true
    }
})

const groupModel = new mongoose.Schema({
    groupName: {
        type: String,
        required: true
    }, 
    groupMembers: {
        type: Array,
        required: true
    }
})

export default { messageModel, userModel, groupModel };