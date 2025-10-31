Email-Reminder-system-
A simple Node.js app that stores reminders in MongoDB and automatically sends scheduled emails using Nodemailer and node-cron.

🚀 How to Run
Install dependencies
Npm install



2.	Set up your .env file:



EMAIL_USER=shanvi199@gmail.com

EMAIL_PASS= shanvi@15





3.	Start the server



Npm start





4.	Add reminders using Postman:



POST http://localhost:5000/add



Body (JSON):



{

“email”:shanvi199@gmail.com,

“subject”: “Meeting Reminder”,

“message”: “Your meeting starts in 10 minutes”,

“date”: “2025-10-23T18:00:00”

}

