const express = require('express');
const app = express();

app.use(express.static(__dirname)); // Serve static files

// Endpoint to handle search requests
app.get('/search', (req, res) => {
  const query = req.query.q; // Get the search query from the request

  // Simulate search results (replace with actual search logic)
  const results = [
    'Result 1: ' + query,
    'Result 2: ' + query,
    'Result 3: ' + query
  ];

  res.json({ results });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
