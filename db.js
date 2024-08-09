const mongoose = require('mongoose');

const mongourl = 'mongodb://127.0.0.1:27017/hotels';

mongoose.connect(mongourl,{
    // useNewUrlParser:true,
    // useUnifiedTopology:true
    })


const db=mongoose.connection;

db.on('connected',()=>{
    console.log('connected to mongodb server successfully');
})

db.on('error',(err)=>{
    console.error('mongodb connection error',err);
})

db.on('disconnected',()=>{
    console.log('Mongodb disconnected.');
})

module.exports = db;