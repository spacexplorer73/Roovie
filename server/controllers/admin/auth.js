const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("../../models/admin.js");

const validateLoginInput = require("../../validation/login.js");
const validateRegisterInput = require("../../validation/register.js");

// register logic
exports.register = (req, res) => {
    // Form validation
    const { errors, isValid } = validateRegisterInput(req.body);
    // Check validation
        if (!isValid) {
            return res.status(400).json(errors);
        }
    Admin.findOne({ email: req.body.email })
    .exec((error, admin) => {
        if(admin) return res.status(400).json({
            email: 'Email already exists'
        });

        const {
            username, 
            email, 
            password,
            agreedTerms
        } = req.body;
        const newAdmin = new Admin({ 
            username, 
            email, 
            password,
            agreedTerms,
            adminProfilePicture: req.file.path // req.file.originalname
        })
        
        // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newAdmin.password, salt, (err, hash) => {
              if (err) throw err;
              newAdmin.password = hash;
              newAdmin
                .save()
                .then(admin => res.json({
                    adminCreated: 'Admin Created Successfully'
                }))
                .catch(err => console.log(err));
            });
          });
        
    });
}

// login logic
exports.login = (req, res) => {
    // Form validation
    const { errors, isValid } = validateLoginInput(req.body);
    // Check validation
        if (!isValid) {
            return res.status(400).json(errors);
        }
    Admin.findOne({ email: req.body.email })
    .exec((error, admin) => {
        if(admin) {
            if(bcrypt.compareSync(req.body.password, admin.password)) {
                const { 
                    _id, 
                    username, 
                    email, 
                    adminProfilePicture 
                } = admin;
                
                const token = jwt.sign({ _id: admin._id }, process.env.SECRET_KEY, { expiresIn: '10h' })
                res.status(200).json({
                    token, 
                    admin: { 
                        _id, 
                        username, 
                        email, 
                        adminProfilePicture 
                    }
                })
            } else {
                return res.status(400).json({
                    passwordIncorrect: 'Password Incorrect!'
                })
            }
        } else {
            return res.status(400).json({
                emailNotFound: 'Email not found'
            })
        }
    });
}