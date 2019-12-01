const express = require('express');
const router = express.Router();
const Visitor = require('../models/Visitor')
const {sendWelcomeEmail,sendByeEmail} = require('../account/nodemailer');
const {sendWelcomeMessage} = require('../account/send_sms');
var moment = require('moment');
var count = 0;
const util = require('util')

router.post('/signup',(req,res)=>{
    console.log("Input",req.body);
    const visitor = new Visitor(req.body);
    try {
        visitor.save((err,data)=>{
            if(!err){
                res.redirect('signup/list?id='+ data._id)
            }
            else{
                res.send('Wrong or duplicate input field entered')
            }
        });
    } catch (error) {
        console.log('error during insertion operation : ' + error);
        
    }
})

router.get('/signup/list',(req,res)=>{

    let id = req.query.id;
    count = count + 1;

    Visitor.findByIdAndUpdate(id, { $set: { 
        'checkInTime' : moment().format('LT') + " IST",
        'applicationNo' : '100'+ count
        } } , (err, data)=>{
        if(!err){
            console.log("data : ",data);  
        }
        Visitor.findOne({_id:id},(err,docs)=>{
            if(!err){
                console.log("docs to send", docs);
                
                sendWelcomeEmail(docs.hostEmail,docs.applicationNo,docs.visitorName,docs.visitorEmail,docs.visitorPhnNo,docs.checkInTime)       //mail sent to host
                sendWelcomeMessage(docs.applicationNo,docs.visitorName,docs.visitorEmail,docs.visitorPhnNo,docs.hostPhnNo,docs.checkInTime)     //msg sent to host
                res.render("profile",{
                    docs
                })
            }else{
                res.send('error while displaying profile')
            }  
        })
       
    })
})

router.get('/checkout/:id',(req,res)=>{
    
    console.log(req.params);
    
    const id = req.params.id;
    Visitor.findByIdAndUpdate(id, { $set: { 
        'checkOutTime' : moment().format('LT') + " IST"
        } } , (err, data)=>{
        if(!err){
            console.log("data : ",data);  
        }
        Visitor.findOne({_id:id},(err,docs)=>{
            if(!err){
                console.log("docs for checkout", docs);
                
                sendByeEmail(docs.applicationNo,docs.visitorName,docs.visitorPhnNo,docs.checkInTime,docs.checkOutTime,docs.hostName,docs.visitorEmail,docs.hostAddress)
                res.render("bye",{
                    docs
                })
            }else{
                res.send('error while displaying profile')
            }  
        })
    })
})





module.exports = router