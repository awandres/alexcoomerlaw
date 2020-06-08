var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
const creds = require('../mailConfig');

var transport = {
  host: 'alexcoomerlaw.com',
  port:587,
  auth: {
    user: creds.USER,
    pass: creds.PASS
  },
  tls: {
     rejectUnauthorized: false
 }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var phoneNumber = req.body.phoneNumber
  var location = req.body.location
  var message = req.body.message
  var content = `name: ${name} \n email: ${email} \n phone: ${phoneNumber} \n location: ${location} \n message: ${message}  `

console.log('request is:' + req.body)
console.log('content is:' + content)
console.log('NEXT IS' + next)



  var mail = {
    from: 'mailer@alexcoomerlaw.com',
    replyTo: email,
    to: 'alexcoomer@alexcoomerlaw.com',  //Change to email address that you want to receive messages on
    subject: 'New Message from ' + name,
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.log(err)
      console.log(data)
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
})

module.exports = router;
