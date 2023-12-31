const mongoose = require("mongoose");
const {member_status_enums, member_type_enums,  ordenary_enums} = require("../lib/config");
const Schema = mongoose.Schema; // mongoose dan olinadigan schema ni ishlatyabmiz

const memberSchema = new mongoose.Schema({
    // mongoose ni ichidan schema olinyabdi
    // schema validation ham hisoblanadi
    mb_nick: {
        type: String,
        required: true,
        index: {unique: true, sparse: true}
    },
    mb_phone: {
        type: String,
        required: true,
        index: {unique: true, sparse: true}
    },
    mb_password: {
        type: String,
        required: true,
        select: false  // password ko'rinmasligi uchun
    },
    mb_type: {
        type: String,
        required: false,
        default: "USER",
        enum: {
            values: member_type_enums,
            message: "{VALUE} is not among permitted values "
        }
    },
    mb_status: {
        type: String,
        required: false,
        default: "ACTIVE",
        enum: {
            values: member_status_enums,
            message: "{VALUE} is not among permitted values "
        }
    },
    mb_full_name: {
        type: String,
        required: false
    },
    mb_address: {
        type: String,
        required: false
    },
    mb_description: {
        type: String, required: false
    },
    mb_image: {
        type: String,
        required: false
    },
    mb_point: {
        type: Number,
        required: false,
        default: 0
    },
    mb_top: {
        type: String,
        required: false,
         default: "Y",
        enum: {
            values: ordenary_enums,
            message: "{VALUE} is not among permitted values "
        }
    },
    mb_views: {
        type: Number,
        required: false,
        default: 0
    },
    mb_likes: {
        type: Number,
        required: false,
        default: 0
    },
    mb_follow_cnt: {
        type: Number,
        required: false,
        default: 0
    },
    mb_subscriber_cnt: {
        type: Number,
        required: false,
        default: 0
    },
   //{timestamps: true}  updatedAt, createdAt

}, {timestamps: true});

module.exports = mongoose.model("Member", memberSchema);



/*
schemani ikki xil usulda qurish mumkin

code based -- schema based
code first method --- schema first

 */