const GITHUB_USERNAME = 'LarytheLord';
const REQUEST_HEADERS = {
  'Accept': 'application/vnd.github+json',
  'User-Agent': 'abid-portfolio',
};

async function fetchJson(url) {
  const response = await fetch(url, { headers: REQUEST_HEADERS });

  if (!response.ok) {
    throw new Error(`GitHub request failed: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

async function fetchText(url) {
  const response = await fetch(url, { headers: REQUEST_HEADERS });

  if (!response.ok) {
    throw new Error(`GitHub request failed: ${response.status} ${response.statusText}`);
  }

  return response.text();
}

function extractContributionCount(html) {
  const match = html.match(/<h2[^>]*>\s*([\d,]+)\s*contributions\s*in the last year\s*<\/h2>/i);
  return match ? Number(match[1].replace(/,/g, '')) : null;
}

function extractCalendarHtml(html) {
  const tableMatch = html.match(/(<table[^>]*ContributionCalendar-grid[\s\S]*?<\/table>)/i);

  if (!tableMatch) {
    return '';
  }

  return tableMatch[1]
    .replace(/<tool-tip[\s\S]*?<\/tool-tip>/gi, '')
    .replace(/\sdata-hydro-click="[^"]*"/g, '')
    .replace(/\sdata-hydro-click-hmac="[^"]*"/g, '');
}

function formatRepoName(repositoryUrl) {
  return repositoryUrl.split('/').slice(-2).join('/');
}

async function fetchGitHubActivity(username = GITHUB_USERNAME) {
  const mergedQuery = `type:pr author:${username} is:merged`;
  const openPrQuery = `type:pr author:${username} is:open`;
  const openIssueQuery = `type:issue author:${username} is:open`;

  const [
    contributionsHtml,
    user,
    mergedPrs,
    openPrs,
    openIssues,
  ] = await Promise.all([
    fetchText(`https://github.com/users/${username}/contributions`),
    fetchJson(`https://api.github.com/users/${username}`),
    fetchJson(`https://api.github.com/search/issues?q=${encodeURIComponent(mergedQuery)}&sort=updated&order=desc&per_page=100`),
    fetchJson(`https://api.github.com/search/issues?q=${encodeURIComponent(openPrQuery)}&per_page=1`),
    fetchJson(`https://api.github.com/search/issues?q=${encodeURIComponent(openIssueQuery)}&per_page=1`),
  ]);

  const recentMergedPrs = (mergedPrs.items || [])
    .filter((item) => !formatRepoName(item.repository_url).startsWith(`${username}/`))
    .slice(0, 5)
    .map((item) => ({
      title: item.title,
      url: item.html_url,
      repo: formatRepoName(item.repository_url),
      number: item.number,
      updatedAt: item.updated_at,
    }));

  return {
    username,
    yearlyContributions: extractContributionCount(contributionsHtml),
    calendarHtml: extractCalendarHtml(contributionsHtml),
    publicRepos: user.public_repos || 0,
    followers: user.followers || 0,
    mergedPrCount: mergedPrs.total_count || 0,
    openPrCount: openPrs.total_count || 0,
    openIssueCount: openIssues.total_count || 0,
    recentMergedPrs,
  };
}

module.exports = {
  fetchGitHubActivity,
};
