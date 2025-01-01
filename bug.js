const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Uncommon Error: Unexpected token } in JSON at position 1234
//This error arises when your server attempts to parse a JSON response that is malformed or contains unexpected characters within the JSON structure.
//This error is not directly related to Express.js itself, but rather to how your server handles incoming JSON data.
//Example scenario: A client sends an incomplete or invalid JSON payload to an Express endpoint that is expecting JSON. 