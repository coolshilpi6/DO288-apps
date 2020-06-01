var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Welcome Shilpi!\n');
});

app.listen(8080, function () {
  console.log('Welcome Shilpi!');
});

