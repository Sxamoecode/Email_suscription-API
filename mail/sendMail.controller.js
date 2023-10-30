const {sendEmail} = require('./sendMail');
const fs = require('fs');
const path = require('path');

exports.sendMail = (req, res) => {
    try {
        const susEmail = req.body.email;

        const Username = req.body.username

        fs.readFile(path.join(__dirname, '..', 'welcomeMess.html'), 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            //console.log(data);

            const mess= `
            <h4>Dear ${Username},</h4>
            ${data}
            `
            //console.log(mess);

            sendEmail(
                susEmail,
                "Welcome to Exploblogworld!",
                mess,
            )
            .then(() => {
                return res.status(200).json({
                    Msg: `A confirmation email has been sent to ${susEmail}`
                })
            })
            .catch(err => {
                console.error(err.message);
                return res.status(500).json({
                    Msg: 'Error sending confirmation email'
                });
            })
            
        })
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            Msg: 'Server error, pls be patient'
        })
    }
}