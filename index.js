const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();

// View engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Static folder
app.use('/', express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// app.get('/api/form', (req, res) => {
//   res.render('contact');
// });

app.post('/api/form', (req, res) => {
  const output = `
    <p>A new Email from portfolio</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'nuresiddiq.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'sdfsdefdsfd', // generated ethereal user
      pass: 'sdfdsfdsfdsa' // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Nodemailer Contact" nalamsiddiq@email.com', // sender address
    to: 'me@nuresiddiq.com', // list of receivers
    subject: 'Mail from my Portfolio', // Subject line
    text: '', // plain text body
    html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    res.render({
      msg: 'Thanks for your emai! I will get back to you shortly.'
    });
  });
});

app.listen(3001, () => console.log('Server started...'));
