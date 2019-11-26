import * as functions from 'firebase-functions';
import * as nodemailer from 'nodemailer';
import * as cors from 'cors';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//


/**
* Here we're using Gmail to send 
*/
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'colecharles1997@gmail.com',
        pass: 'Goldfish2!'
    }
});


exports.sendMail = functions.https.onRequest((req, res) => {
    cors(() => {
      
        // getting dest email by query string
        const dest = req.query.dest;
        const username = req.query.username;
        const total = req.query.total;

        const mailOptions = {
            from: 'FOODIE <foodie@gmail.com>', // Something like: Jane Doe <janedoe@gmail.com>
            to: dest,
            subject: 'FOODIE Confirmation', // email subject
            html: ` ${username}, your total is $${total}.
            ` // email content in HTML
        };
  
        // returning result
        return transporter.sendMail(mailOptions, (erro: any) => {
            if(erro){
                return res.send(erro.toString());
            }
            return res.send('Sended');
        });
    });    
});