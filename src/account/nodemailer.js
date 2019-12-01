var nodemailer = require('nodemailer')

const keys = require('../auth/keys')

const sendWelcomeEmail = (hostEmail, applicationNo, visitorName , visitorEmail , PhoneNumber , checkInTime) => {
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: keys.auth.email,           //email id
      pass: keys.auth.pass           //my gmail password
    },
    pool: true
  });
  
  var mailOptions = {
    from: 'ankitsrivastava21345@gmail.com',
    to: `${hostEmail}`,
    subject:`Innovacer Meeting`,
    html:`<p>Application Number : ${applicationNo}</p> <p>Visitor Name : ${visitorName}</p> <p>Visitor Email Id : ${visitorEmail}</p>  <p>Visitor Phone Number : ${PhoneNumber}</p> <p>Check-in Time : ${checkInTime}</p>`
  };
  console.log("mailOptions : " ,mailOptions);
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}


const sendByeEmail = (applicationNo, visitorName , PhoneNumber , checkInTime, checkOutTime, hostName,visitorEmail,hostAddress) => {
  var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: keys.auth.email,           //email id
        pass: keys.auth.pass           //my gmail password
      },
      pool: true
    });
    
    var mailOptions = {
      from: 'ankitsrivastava21345@gmail.com',
      to: `${visitorEmail}`,
      subject:`Innovacer Meeting`,
      html:`<p>Application Number : ${applicationNo}</p> <p>Visitor Name : ${visitorName}</p> <p>Visitor Phone Number : ${PhoneNumber}</p> <p>Check-in Time : ${checkInTime}</p>  <p>Check-out Time : ${checkOutTime}</p> <p>Host Name : ${hostName}</p>  <p>Address Visited : ${hostAddress}</p>`
    };
    console.log("mailOptions : " ,mailOptions);
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }

module.exports = {
    sendWelcomeEmail,
    sendByeEmail
}