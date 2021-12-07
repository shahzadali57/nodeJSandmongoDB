const mongoose = require('mongoose');
const express = require('express')
const cors = require('cors')
const app = express();
const port = 3000;
const signupModel = require('./schema');

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors());

const DB_URI = "mongodb+srv://shezi:shezieli@cluster0.q6rd4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(DB_URI, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})

app.post('/signup', (request, response) => {
    try {
        const body = request.body
        signupModel.create(body, (error, data) => {
            if (error) {
                throw error;
            }
            else {
                response.send(data)
                console.log(data);
            }
        })
    } catch (error) {
        response.send(`Error on signup >>> ${error.message}`)
    }
})

app.post('/login', (request, response)=>{
    try {
        const body = request.body;
        loginModel.create(body, (error, data)=>{
if(error){
    throw error
}
else{
    response.send(data)
}
        })
    } catch (error) {
        response.send(`Error on login >>> ${error.message}`)
    }
})


mongoose.connection.on("connected", ()=>console.log('mongoose connected successfuly'));;
mongoose.connection.on("error", ()=>console.log('mongoose not connected'));
app.listen(port, ()=>console.log(`your port is running on localhost:${port}`));