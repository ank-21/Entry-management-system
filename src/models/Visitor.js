const mongoose = require('mongoose')
const validator = require('validator')

const visitorSchema = new mongoose.Schema({
    visitorName: {
        type:String,
        trim:true,
        required:true
    },
    visitorEmail: {
        type: String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail){
                throw new Error('Email is invalid')
            }
        }
    },
    visitorPhnNo:{
        type:String,
        required:true,
    },
    applicationNo: {
        type:String
    },
    checkInTime:{
        type:String
    },
    checkOutTime:{
        type:String
    },
    hostName: {
        type:String,
        trim:true,
        required:true
    },
    hostEmail: {
        type: String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail){
                throw new Error('Email is invalid')
            }
        }
    },
    hostPhnNo:{
        type:String,
        required:true
    },
    hostAddress:{
        type:String,
        required:true
    }
});



const Visitor = mongoose.model('visitor',visitorSchema);
module.exports = Visitor;