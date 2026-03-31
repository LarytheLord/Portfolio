const express = require('express');
const path = require('path');
const { fetchGitHubActivity } = require('./github-activity');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));
app.use('/blog', express.static(path.join(__dirname, 'blog')));

// Serve HTML files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/github-activity', async (req, res) => {
  try {
    const activity = await fetchGitHubActivity(req.query.username || 'LarytheLord');
    res.setHeader('Cache-Control', 'public, max-age=1800');
    res.json(activity);
  } catch (error) {
    res.status(500).json({
      error: 'Unable to load GitHub activity right now.',
      detail: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
