require('dotenv').config();
const express = require('express');
var cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/', routes);

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
