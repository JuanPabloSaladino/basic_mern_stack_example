const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.APP_PORT

// settings
app.set('port', process.env.PORT || 4000);
//app.set('port', proccess.env.PORT);

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use('/api/users', require('./routes/users'))
app.use('/api/notes', require('./routes/notes'))

module.exports = app;