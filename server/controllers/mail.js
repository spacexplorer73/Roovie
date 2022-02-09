const request = require("request");
const dotenv = require("dotenv");

dotenv.config();

exports.newsletterMail = (req, res) => {
        const { email } = req.body;
    
        const mailChimpData = {
            members: [
                {
                    email_address: email,
                    status: 'subscribed'
                }
            ]
        }

        const mailChimpDataPost = JSON.stringify(mailChimpData);

        const options = {
            url: String(process.env.MAILCHIMPI_URL),
            method: 'POST',
            headers: {
                Authorization: `auth ${process.env.MAILCHIMPI_API}`
            },
            body: mailChimpDataPost
        }
        
        request(options, function(error, response, body){
            if (error){
                res.send("failed");
            }   else{
                    if(response.statusCode === 200){
                        res.send("success");
                    }
                    else{
                        res.send("failed");
                    }
                }
        });
}