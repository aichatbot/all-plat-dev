import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';

import userAPIs from './api/users';
import threadAPIs from './api/threads';

const DB = 'mongodb://localhost:27017/bbs';

mongoose.connect(
  DB,
  { useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology:true },
  (err) => {
    if (err) throw err;
    console.log('已连接到数据库...');

    const app = express();
    app.use(bodyParser.json());
    app.use(express.static('static'));

    userAPIs(app);
    threadAPIs(app);

    app.listen(3000);
  },
);
