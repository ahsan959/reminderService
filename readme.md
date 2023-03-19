use SMTP Server (gmail SMTP Server )
and for Connecting use famous Library called Nodemailer

Steps

create a New Account in Google
turn on 2 step Verification
After this Generate app password
and past app password and email in .env file

---

setup Over Node mailer

Inside email_config.js create transport Object
what is transport Object
using transport Object we are able to send an email this Object provided by the nodemailer
to sending the email

we are creating the api to save all the email
and send back to the response example one person start a booking send backto the response
you are booked successfully


How to create the Reminder 
For example we will create a Movie Booking api that will remind the hi user we will bock 
this movie today time 
How to create this thing How to triggered the Reminder 
you Register the Reminder in our database all over the Reminder in our application can have than we setup cron this cron Everyday they any time read the database what all users all their which are expecting to email this day 
prompt job this is Sechdule jobs you can schudule particuler task we will chack everyday 
or Every After 2hours    

node provide a package called node-cron 




===========================>Adding Logic To Reminder Service<==============================
we have a add View More Things 

there can be a case of Suhedule some email Every 1 hour any time perform a cron job 
add model some email Details subject Time something  

