const express = require('express');
const livereload = require('livereload');
const connectLivereload = require('connect-livereload');
const path = require('path');

const PORT = process.env.PORT || 3000;

// Start livereload server to watch static files
const lrserver = livereload.createServer({ exts: ['html', 'css', 'js'] });
lrserver.watch(path.join(__dirname, '/'));

const app = express();
app.use(connectLivereload());
app.use(express.static(path.join(__dirname, '/')));

app.listen(PORT, () => {
  console.log(`Dev server running at http://localhost:${PORT}`);
  console.log('Livereload watching html, css, js files in project root');
});
