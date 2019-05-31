const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const users = require('./api/users');
const threads = require('./api/threads');

const DB = 'mongodb://localhost:27017/bbs';

mongoose.connect(
  DB,
  { useNewUrlParser: true, useCreateIndex: true },
  (err) => {
    if (err) throw err;
    console.log('已连接到数据库...');

    const app = express();
    app.use(bodyParser.json());
    app.use(express.static('static'));

    users.apis(app);
    threads.apis(app);

    app.listen(3000);
  },
);
