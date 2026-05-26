const https = require('https');
https.get('https://api.github.com/repos/DavidHDev/react-bits/git/trees/main?recursive=1', { headers: { 'User-Agent': 'Node.js' } }, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const tree = JSON.parse(data).tree;
    const items = tree.filter(t => t.path.toLowerCase().includes('circulargallery'));
    console.log(JSON.stringify(items, null, 2));
  });
});
