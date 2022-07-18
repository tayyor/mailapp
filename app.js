const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const port = process.env.PORT || 3000;
require('dotenv/config');

//define transporter

const transporter = nodemailer.createTransport({
    service:'gmail',
    host:'smtp.gmail.com',
    auth:{
        user:process.env.EMAIL_USER,
        pass: process.env.EMAIL_PSWD
    },
    tls:{
         rejectUnauthorized:false,
    }
});
        send();
    
     async function send(){
        const mailoptions = await transporter.sendMail({
            from:'harliphax@gmail.com',
            to:'abdulhaphyz@gmail.com',
            subject:'TEST',
            html:'<h1>mail sent using nodejs via nodemailer!!!</h1> ',
            date: new Date()
        });
        console.log(`mail sent`);
    }
    



app.listen(port,()=>{
    console.log(`Server is running on port ${port}...`);
})