const express = require('express')
const app = express()
const cors  = require('cors')
const mongoose = require('mongoose')
const UserModel = require("./models/UserModel")

mongoose.connect('mongodb://127.0.0.1:27017/userdb');


app.use(express.json())
app.use(cors())  //Connct Reaact with backend



app.get('/getUsers', (req, res) =>{

    UserModel.find({}).then((result) =>{
        res.json(result);
    })
    
})


app.post('/addUser', (req, res) =>{

    const user  = req.body;
    const NewUser = new UserModel(user);
    NewUser.save();
    res.json(req.body);

})


app.listen(3001, ()=> {
    console.log('listening on 3001');
})