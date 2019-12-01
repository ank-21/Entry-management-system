# Innovacer Assignment

This is a simple REST API server implementation built on top of Node.js, Express.js with Mongoose.js for MongoDB integration.
The user will submit the form regarding the meeting with the host and simultaneously an e-mail and message will be provided to the host informing about the visitor's details. The E-Mail feature is built using Nodemailer and SMS feature is built using Twilio.

## Getting Started
```bash
mdkir -p ~/Desktop/innovacer
cd ~/Desktop/innovacer
git clone https://github.com/ank-21/Innovacer
```

## Prerequisites
You need to have npm and Node.js installed.

## Run Server
```bash
 # Install all dependencies
    npm install

# Start the server
    npm run dev
 ```
 
## Base URI for making requests
```bash
 http://localhost:3000/
```
 ## Routes
 
 ### POST Request
 ```bash
 http://localhost:3000/welcome/signup
 ```
 This route will allow user to fill the visitor and host details with basic information like Name, Email Id, Mobile Number, Address and save all these fields in database

 *Email must be unique for each input
 
 ### GET Request
 ```bash
 http://localhost:3000/welcome/signup/list
 ```
 This route will display the profile page.The Check-in Time is added to the database using Moment.js and an e-mail along with a message will be sent to the host regarding visitor's details.

 ### GET Request
 ```bash
 http://localhost:3000/welcome/checkout/:id
 ```
 This route occurs when user will click on the check-out button on profile page.The check-out time is added to the database using moment.js .
 and finally an acknowledgement page will be displayed  to the user and an E-mail will  be sent to the visitor with basic informations like Name, Mobile No, Check-in Time, Check-out Time, Host Name, Address Visited.
 
 ## Workflow
 The user will fill the visitor and host details regarding the meeting.
 All the details will then be saved in the database with the timestamp of the entry.
 An E-mail along with a Message will then be sent to the host informing him about the visitor's details.
 The user will be displayed with the profile page having all the information and a check-out button which on clicking will lead him to     acknowledgement page and an E-mail will be sent to the visitor with information regarding meeting.
 
 
## Assumptions
1.Visitor will fill the form regarding host and visitor details.
2.Since Twilio only can send SMS to the verified numbers on free trial basis so either the tester will have to add the number in twilio account or can use "8875825910" number to send SMS
3.The user can click check-out button if the meeting is over

The Screenshots of the workflow is attached below.

 [https://github.com/ank-21/Innovacer/blob/master/public/images/WhatsApp%20Image%202019-12-01%20at%2021.18.25.jpeg]
 [Test Image](https://github.com/ank-21/Innovacer/blob/master/public/images/Annotation%202019-12-01%20174358.png)
 [Test Image](https://github.com/ank-21/Innovacer/blob/master/public/images/Annotation%202019-12-01%20211435.png)
 [Test Image](https://github.com/ank-21/Innovacer/blob/master/public/images/Annotation%202019-12-01%20211520.png)
