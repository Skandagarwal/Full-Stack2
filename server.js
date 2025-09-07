const express = require('express');
const app = express();


const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log("server started at 3000")
});  

app.get('/', (req,res) =>{
    res.send("HELLO JIIII");
});

app.post('/cars', (req,res) =>{
    const{name,brand} = req.body;
    console.log(name);
    console.log(brand);
    res.send("car submitted succesfully")
});

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/myDatabase', {
//     useNewurlParser:true,
//     useUnifiedTopology:true
// })
// .then(()=>{console.log("connection succcessful")})
// .catch(()=>{console.log("recieved an error")});