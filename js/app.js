const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// set up body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

let contestants = [
    {
        "id":"0166",
        "name": "Eyo Bright E"
    },
    {
        "id": "0176",
        "name": "Oluwole Faith"
    },
    {
        "id":"0186",
        "name": "Kanayo Beatrice"
    }
]

app.get('/', (request, response)=>{
   response.send(contestants);
});




// const path = require('path');
// const cors = require('cors');


// const votes = require('./routes/votes');

// set public folder
// app.use(express.static(path.join(__dirname, 'public')));



//enable cors
// app.use(cors());

// app.use('/votes', votes);

// create port and listen
const port = 5500;
app.listen(port, ()=>{
    console.log(`server started on port ${port}`);
})