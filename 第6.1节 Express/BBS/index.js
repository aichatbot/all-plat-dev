const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const User = require('./model/User');

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

    app.get('/api/users', async (req, res) => {
      try {
        const users = await User.find();
        return res.json({
          data: users,
        });
      } catch (e) {
        return res.status(400).json({
          message: e.message,
        });
      }
    });

    app.listen(3000);
  },
);
