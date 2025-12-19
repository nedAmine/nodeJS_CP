let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mohaned.amine@gmail.com',
    pass: 'mypassword'
  }
});

let mailOptions = {
  from: 'mohaned.amine@gmail.com',
  to: 'mohaned_amin@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});