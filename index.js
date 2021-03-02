const express = require('express');
const dotenv = require('dotenv');
dotenv.config()
require('./src/db/mongodb')
const cookieParser = require('cookie-parser');
const DictRoute = require('./src/routes/dictRoute')

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(DictRoute)

const Port = 5000;
app.listen(Port, () => { console.log('Server connected on port ' + Port) });
