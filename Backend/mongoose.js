const mongoose=require('mongoose');

async function ConnectMongoDB(){
    return await mongoose.connect('mongodb://127.0.0.1:27017/Unesco');
}

module.exports=ConnectMongoDB;