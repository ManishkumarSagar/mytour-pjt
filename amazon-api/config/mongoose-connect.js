const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost:27017/amazon',{});
const userschema= {
    fullname:String,
    firstname:String,
    lastname:String,
    mobileno:String,
    email:String,
    password:String,
    address:String,
    city:String,
    state:String,
    village:String,
    role:String,
    position:String,
    salary:String,
    image:String,
    country:String
};
let user= mongoose.model('users',userschema);
module.exports= user;