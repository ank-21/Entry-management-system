const keys = require('../auth/keys')

const sendWelcomeMessage = (applicationNo, visitorName , visitorEmail , visitorPhoneNumber , hostPhoneNumber , checkInTime) => {

const accountSid = keys.auth.accountSid;
const authToken = keys.auth.authToken;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: `Visitor Deatils
     Name : ${visitorName},
     Application Number : ${applicationNo},
     Email Id : ${visitorEmail},
     Mobile No. : ${visitorPhoneNumber},
     Check-in Time : ${checkInTime}`,
     from: '+12568889310',
     to: `+91${hostPhoneNumber}`
   })
  .then(message => console.log(message.sid))
  .catch(error => console.log("error in msg ",error));

}

module.exports = {
    sendWelcomeMessage
}