const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const adminRoutes = require("./routes/admin/auth.js");

const mailRoutes = require("./routes/mail.js");
const userRoutes = require("./routes/auth.js");
const movieRoutes = require("./routes/movie.js");
const requestRoutes = require("./routes/request.js");

// environment variable config
dotenv.config();

app.get('/', (req, res) => {
    res.send("Welcome to Roovie App!")
})

// middleware bodyParser code
app.use(cors());

app.use('/uploads', express.static('uploads'))

app.use(bodyParser.urlencoded({
    limit: '100mb',
    extended: true
}))

app.use(bodyParser.json({
    limit: '100mb',
    extended: true
}))

// connect to mongoDB atlas
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log("Connection to mongoDB atlas established!");
})

// routes
app.use('/admin', adminRoutes);

app.use('/mail', mailRoutes);
app.use('/user', userRoutes);
app.use('/movie', movieRoutes);
app.use('/request', requestRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on: ${process.env.PORT}`);
})