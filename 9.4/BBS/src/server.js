import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import { Helmet } from 'react-helmet';
import App from './jsx/App';

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

    app.listen(3000);
  },
);
