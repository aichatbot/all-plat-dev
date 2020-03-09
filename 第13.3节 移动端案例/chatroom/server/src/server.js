import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import { Helmet } from 'react-helmet';
import App from './jsx/App';

import http from 'http';
import socketIO from 'socket.io';

import userAPIs from './api/users';
import threadAPIs from './api/threads';

const DB = 'mongodb://localhost:27017/bbs';

const template = (markup, helmet) => (
  `<!DOCTYPE html>
    <html>
      <head>
        ${helmet.meta.toString()}
        ${helmet.title.toString()}
        <link rel="stylesheet" href="/css/bootstrap.min.css"/>
      </head>
      <body>
        <div id="root">${markup}</div>
        <script src="/client.js" async></script>
      </body>
    </html>`
);

const serverRender = (req, res, next) => {
  const markup = (
    ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={{}}>
        <App />
      </StaticRouter>,
    )
  );
  const helmet = Helmet.renderStatic();
  res.status(200).send(template(markup, helmet));
  next();
};

mongoose.connect(
  DB,
  { useNewUrlParser: true, useCreateIndex: true },
  (err) => {
    if (err) throw err;
    console.log('已连接到数据库...');

    const app = express();
    app.use(bodyParser.json());
    app.use(express.static('static'));

    userAPIs(app);
    threadAPIs(app);

    app.use(serverRender);

    const server = http.Server(app);
    const io = socketIO(server);
    server.listen(3000);

    const comments = []
    io.on('connection', (socket) => {
      socket.on('join', (data) => {
        const { rid, username } = data;
        socket.join(rid);
        io.to(rid).emit('system', `${username}进入了房间`);
        io.to(rid).emit('comments', comments);
      });

      socket.on('comments', (data) => {
        const { comment, username, rid } = data;
        comments.unshift({ comment, username, posttime: Date() });
        if (comments.length > 30) comments.pop();
        io.to(rid).emit('comments', comments);
      });
    });
  },
);
