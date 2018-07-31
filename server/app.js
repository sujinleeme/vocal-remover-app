/** require dependencies */
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const routes = require('./routes/');
// const cloudinary = require("cloudinary")

const app = express();
const router = express.Router();
const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/vocal-remover';

/** connect to MongoDB datastore */
try {
  mongoose.connect(url, {
    // useMongoClient: true
  });
} catch (error) {

}

const port = 5000 || process.env.PORT;

/** set up routes {API Endpoints} */
routes(router);

/** set up middlewares */
app.use(cors());
app.use(bodyParser.json());
app.use(helmet());
// app.use('/static',express.static(path.join(__dirname,'static')))


app.get('/', (req, res) => {
  const help = `
  <pre>
    Welcome to Vocal Remover for Karaoke API!
 </pre>
  `;
  res.send(help);
});


app.use('/api', router);

/** start server */
app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});
