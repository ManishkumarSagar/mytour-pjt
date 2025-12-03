const express= require('express');
const app= express();
const cors = require('cors');
const port= 3001;

const corsOptions = {
origin: 'http://localhost:3000',
methods: ['GET','POST','PUT','DELETE','OPTIONS'],
allowedHeaders: ['Content-Type','Authorization','X-Requested-With'],
credentials: true
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // preflight


    app.get('/',(request,response)=>{
        response.send("this is new api function")
    });
    app.use(express.json());
    app.use('/user',require('./routes/userroutes'));
    app.listen(port,()=>{
        console.log(`server is running at ${port}`)
    });