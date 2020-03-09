import express from 'express';
import bodyParser from 'body-parser';
import api from './api';

const app = express();

app.use(bodyParser.json());
app.use(express.static('static'));

api(app);

app.listen(3000);
