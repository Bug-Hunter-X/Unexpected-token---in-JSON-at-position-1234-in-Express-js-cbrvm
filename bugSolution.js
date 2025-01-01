const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON

app.post('/data', (req, res) => {
  try {
    const data = req.body; 
    // Process the data
    console.log(data);
    res.status(200).json({ message: 'Data received successfully' });
  } catch (error) {
    console.error('Error parsing JSON:', error);
    res.status(400).json({ error: 'Invalid JSON' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});