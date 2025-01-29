const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
  const response = {
    email: 'tommola.oke@gmail.com',
    current_datetime: new Date().toISOString(), // Dynamically generated ISO 8601 timestamp
    github_url: 'https://github.com/tomolaoke/HNG12StageZeroTask',
  };
  res.status(200).json(response);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});