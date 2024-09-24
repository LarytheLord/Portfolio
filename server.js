const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Parse JSON bodies
app.use(express.json());

// Serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle form submissions
app.post('/submit-form', (req, res) => {
  const { name, email, message } = req.body;
  
  // Here you would typically save this data to a database
  // or send an email notification
  console.log('Form submission:', { name, email, message });

  res.json({ success: true, message: 'Form submitted successfully' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});