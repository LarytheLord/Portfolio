const { fetchGitHubActivity } = require('../github-activity');

module.exports = async function handler(req, res) {
  if (req.method && req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const username = req.query?.username || 'LarytheLord';

  try {
    const activity = await fetchGitHubActivity(username);
    res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate=3600');
    res.status(200).json(activity);
  } catch (error) {
    res.status(500).json({
      error: 'Unable to load GitHub activity right now.',
      detail: error.message,
    });
  }
};
