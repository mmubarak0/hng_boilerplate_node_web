const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const setupSwagger = require('./swagger');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

setupSwagger(app);

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
