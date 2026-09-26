const http = require('http');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const PORT = 3000;
const HOST = '127.0.0.1';
const ROOT_DIR = path.resolve(__dirname, '..');

// MIME types dictionary
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
};

// 1. Kill any orphaned background process on port 3000
function freePort(port) {
  try {
    if (process.platform === 'win32') {
      const output = execSync(`netstat -ano | findstr :${port}`).toString();
      const lines = output.trim().split('\n');
      const pids = new Set();
      lines.forEach((line) => {
        const parts = line.trim().split(/\s+/);
        const state = parts[3];
        const pid = parts[parts.length - 1];
        if (state === 'LISTENING' && pid && pid !== '0' && pid !== String(process.pid)) {
          pids.add(pid);
        }
      });
      pids.forEach((pid) => {
        try {
          execSync(`taskkill /F /PID ${pid}`);
        } catch (e) {}
      });
    }
  } catch (err) {}
}

freePort(PORT);

// 2. Check if build exists, if not build it
let staticDir = path.join(ROOT_DIR, 'out');
if (!fs.existsSync(staticDir)) {
  console.log('\n📦 Compiling production pages (one-time build for Node 24 stability)...');
  try {
    execSync('npx.cmd next build --no-lint', { cwd: ROOT_DIR, stdio: 'inherit' });
  } catch (e) {
    console.error('Build step encountered an error:', e.message);
  }
}

// 3. Create ultra-fast native HTTP server
const server = http.createServer((req, res) => {
  let reqUrl = req.url.split('?')[0];
  if (reqUrl === '/') reqUrl = '/index.html';

  let filePath = path.join(staticDir, reqUrl);

  // If path is a directory, look for index.html
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  // If file doesn't have an extension and doesn't exist, try adding .html
  if (!fs.existsSync(filePath) && !path.extname(filePath)) {
    if (fs.existsSync(filePath + '.html')) {
      filePath = filePath + '.html';
    }
  }

  // Fallback to 404.html
  if (!fs.existsSync(filePath)) {
    const notFoundPath = path.join(staticDir, '404.html');
    if (fs.existsSync(notFoundPath)) {
      filePath = notFoundPath;
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      return fs.createReadStream(filePath).pipe(res);
    }
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    return res.end('404 Not Found');
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  res.writeHead(200, {
    'Content-Type': contentType,
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Origin': '*',
  });
  fs.createReadStream(filePath).pipe(res);
});

server.listen(PORT, HOST, () => {
  console.log(`\n===========================================================`);
  console.log(`🎉 LearnMore Technologies is LIVE and running!`);
  console.log(`👉 Open: http://${HOST}:${PORT}`);
  console.log(`===========================================================\n`);
});
