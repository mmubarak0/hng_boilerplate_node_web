var express = require('express');
var dotenv = require('dotenv');
var cors = require('cors');
var setupSwagger = require('./swagger');
dotenv.config();
var app = express();
var port = process.env.PORT || 5000;
setupSwagger(app);
app.use(express.json());
app.use(cors());
app.listen(port, function () {
    console.log("Server is running on port ".concat(port));
});
