require('dotenv').config();
const http = require('http');
const path = require('path');
const {logger, logEvents} = require('./middleware/logEvents');
const  errorHandler  = require('./middleware/errorHandler');
const verifyJWT = require('./middleware/verifyJWT');
const corseOptions = require('./config/corsOptions');
const cors = require('cors');
const express = require('express');
const { nextDay } = require('date-fns');
const cookieParser = require('cookie-parser');
const credentials = require('./middleware/credentials');
const app = express();
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');
const PORT = process.env.PORT || 3500;

//connect to mongo db
connectDB();

//serve static files
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

//middleware
app.use(cookieParser());

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials);

app.use('/', require('./routes/root'))

//api routes:
app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));
app.use('/refresh', require('./routes/refresh'));
app.use('/logout', require('./routes/logout'));
app.use(verifyJWT);
app.use('/employees', require('./routes/api/employees'));
app.use('/users', require('./routes/api/users'));

//custom middlware logger
app.use(logger);
//cross origin reaource sharing
app.use(cors(corseOptions));

//route handlers
app.get(/^\/.*$/, (req,res)=>{
    res.status(404)
    
    if(req.accepts('html')){
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    }
    else if(req.accepts('json')){
        res.json({error: "404 not found"});
    }
    else {
        res.type('txt').send("404 not found");
    }
});

app.use(errorHandler);

mongoose.connection.once('open', ()=>{
    console.log("Connected to Mongo DB");
    app.listen(PORT, ()=> console.log(`Server running on Port ${PORT}`));
})

