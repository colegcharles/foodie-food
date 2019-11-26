
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});
const app = require('express');


// const app = express();

/**
* Here we're using Gmail to send 
*/
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'coleybear1010@gmail.com',
      pass: 'rrockets1'
    }
  });


exports.sendEmail = functions.https.onCall((data, context) => {
  

        const mailOptions = {
            from: 'FOODIE <CustomerSupport@FOODIEFOOD.com>', // Something like: Jane Doe <janedoe@gmail.com>
            to: `${data.dest}`,
            subject: 'Customer Confirmation', // email subject
            html: `<h1>Thank you ${data.username}!!! </h1>
            <br>
            <div>Your order with a total of $${data.total} has been received and processed.</div>
            ` // email content in HTML
        };

        
  
        // returning result
        return transporter.sendMail(mailOptions, (erro, info) => {
            if(erro){
                return res.status(400).send({data: {erro}});
            }
            return res.status(200).send({data: {'message': "success"}});
        });   
      });
      

