//Need to put some modules that we have installed
const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
//When we have an incoming API call it'll will not block it and we'll be able to send data to our back-end
app.use(cors());
//We'll be also able to send data  in JSON format
app.use(express.json());
//We are setting to false because we we're not gonna be sending in any form data
app.use(express.urlencoded({extended:false}))

// create
app.post('/insert',(request,response)=>
    {

    });
// read 
app.get('/getAll',(request,response)=>
    {
        console.log('test');
    });
//update

// delete