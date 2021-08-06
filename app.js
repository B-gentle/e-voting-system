const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const { urlencoded } = require('body-parser');

const app = express();

const votes = require('./routes/votes');

// set public folder
app.use(express.static(path.join(__dirname, 'public')));

// set up body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//enable cors
app.use(cors());

app.use('/votes', votes);

// create port and listen
const port = 5000;
app.listen(port, ()=>{
    console.log(`server started on port ${port}`);
} 
    
)