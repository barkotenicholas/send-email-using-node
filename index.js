var mail = require('nodemailer');

var transporter = mail.createTransport({
    service:'gmail',
    auth:{
        user:'barkotenicholas@gmail.com',
        pass:'barpello329',
    }
});

var mailOptions = {
    from: 'barkotenicholas@gmail.com',
    to:'barkotenicholas@gmail.com',
    subject:'Sending email',
    text:'that was easy'
};

transporter.sendMail(mailOptions, function(err,info){
    if(err){
        console.log(err);
    }
    else{
        console.log('email sent: '+ info.response)
    }
});