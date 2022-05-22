const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const port = 8000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));
require('./server/routes/EscapeRoom.routes')(app); 
require('./server/config/mongoose.config');

    
app.listen(port, () => console.log(`Listening on port: ${port}`) );