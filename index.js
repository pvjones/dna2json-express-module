const express = require('express');
const translateRaw = require('./translateRaw')
const port = 3000;

const app = express();
app.use(express.static('/'));

let readPath = ``;
let writePath = ``;

translateRaw.toJSON(readPath, writePath);

app.listen(port, function() {
  console.log(`Express is running on ${port}`)
});