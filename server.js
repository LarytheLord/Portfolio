const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.static('public'));
app.use('/blog', express.static(path.join(__dirname, 'blog')));

// Serve HTML files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});