"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const cors = require("cors");
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
    cors(req, res, () => {
        // getting dest email by query string
        const dest = req.query.dest;
        const username = req.query.username;
        const total = req.query.total;
        const mailOptions = {
            from: 'FOODIE <foodie@gmail.com>',
            to: dest,
            subject: 'FOODIE Confirmation',
            html: ` ${username}, your total is $${total}.
            ` // email content in HTML
        };
        // returning result
        return transporter.sendMail(mailOptions, (erro) => {
            if (erro) {
                return res.send(erro.toString());
            }
            return res.send('Sended');
        });
    });
});
//# sourceMappingURL=index.js.map