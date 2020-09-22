const restify = require('restify');
const nodemailer = require('nodemailer');
require('dotenv').config()

const server = restify.createServer();

server.use(restify.plugins.bodyParser());

// POST http://localhost:3000/email/send
// {
//     "to": ["adauto.inatel@gmail.com", "adauto.junior@live.com", "adauto.mendes@inatel.br"],
//     "subject": "Your subject",
//     "textContent": "My Content",
//     "htmlContent": "<h1>My Content</h1>"
// }
server.post('/email/send', async (req, res) => {
    let { to, subject, textContent, htmlContent } = req.body;

    let transporter = nodemailer.createTransport({
        service: process.env.SENDER_SERVICE,
        auth: {
            user: process.env.SENDER_EMAIL,
            pass: process.env.SENDER_PASS,
        },
    });

    let emailOpt = {
        from: `"${process.env.SENDER_NAME}" <${process.env.SENDER_EMAIL}>`, // sender address
        to, // list of receivers
        subject, // Subject line
        text: textContent, // text body
        html: htmlContent, // html body
    };

    await transporter.sendMail(emailOpt, (err, info) => {
        if (err) {
            console.log(err);
            return res.json(err);
        } else {
            console.log(info);
            return res.json({ sentOk: info.accepted, sentNok: info.rejected });
        }
    });
});

const PORT = process.env.APP_PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
})