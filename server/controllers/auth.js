const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user.js");

const validateLoginInput = require("../validation/login.js");
const validateRegisterInput = require("../validation/register.js");

// register logic
exports.register = (req, res) => {
    // Form validation
    const { errors, isValid } = validateRegisterInput(req.body);
    // Check validation
        if (!isValid) {
            return res.status(400).json(errors);
        }
    User.findOne({ email: req.body.email })
    .exec((error, user) => {
        if(user) return res.status(400).json({
            email: 'Email already exists'
        });

        const {
            username, 
            email, 
            password,
            agreedTerms
        } = req.body;
        const newUser = new User({ 
            username, 
            email, 
            password,
            agreedTerms,
            userProfilePicture: req.file.path // req.file.originalname
        })
        
        // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser
                .save()
                .then(user => res.json({
                    userCreated: 'User created successfully!'
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
    User.findOne({ email: req.body.email })
    .exec((error, user) => {
        if(user) {
            if(bcrypt.compareSync(req.body.password, user.password)) {
                const { 
                    _id, 
                    username, 
                    email, 
                    userProfilePicture 
                } = user;
                
                const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY, { 
                    expiresIn: '10h' 
                });
                res.status(200).json({
                    token, 
                    user: { 
                        _id, 
                        username, 
                        email, 
                        userProfilePicture 
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

exports.updateUser = async (req, res) => {
    const { id } = req.params;
    try {

        const updatedUser = { 
            _id: id, 
            email: req.body.email,
            username: req.body.username,
            userProfilePicture: req.file.path  
        };

        await User.findByIdAndUpdate(id, updatedUser, { new: true });

        res.json({
            user: {
                _id: updatedUser._id,
                email: updatedUser.email,
                username: updatedUser.username,
                userProfilePicture: updatedUser.userProfilePicture
            },
            isSuccess: true
        });
    } catch (error) {
        res.status(409).json({ 
            message: error.message
        });
    }
}