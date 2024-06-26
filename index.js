import express from 'express';
import Connection from './database/db.js';
import Router from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app= express();
app.use(cors({origin:"*"}))
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', Router)
const PORT=8000;
app.listen(8000, ()=> console.log(`Hello server is running successfully on PORT ${PORT}`));
Connection();