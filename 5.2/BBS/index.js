const mongoose = require('mongoose');
const User = require('./model/User');
const Thread = require('./model/Thread');
const Comment = require('./model/Comment');	

const DB = 'mongodb://localhost:27017/bbs';

mongoose.connect(DB, 
    { useNewUrlParser: true, useCreateIndex:true },
    (err) => {
    if (err) throw err;
    console.log('已连接到数据库...');
});