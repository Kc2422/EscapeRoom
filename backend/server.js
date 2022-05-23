const express = require('express');
require('dotenv').config();
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const app = express();
const cors = require('cors');
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
const port = 8000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));
require('./server/routes/EscapeRoom.routes')(app); 
require('./server/config/mongoose.config');

    
app.listen(port, () => console.log(`Listening on port: ${port}`) );