const http = require('http');
const { parse } = require('url');
const path = require('path');
const next = require('next');
const { execSync } = require('child_process');

const PORT = parseInt(process.env.PORT || '3000', 10);
const HOST = '127.0.0.1';

// Function to kill any orphaned process on the target port
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
          console.log(`[Auto-Clean] Freed port ${port} by terminating PID: ${pid}`);
        } catch (e) {}
      });
    } else {
      execSync(`lsof -ti:${port} | xargs kill -9`);
    }
  } catch (err) {}
}

freePort(PORT);

process.env.NEXT_TELEMETRY_DISABLED = '1';

const app = next({
  dev: true,
  hostname: HOST,
  port: PORT,
  dir: path.resolve(__dirname, '..'),
});

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = http.createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  server.listen(PORT, HOST, (err) => {
    if (err) throw err;
    console.log(`\n🚀 LearnMore Technologies live at http://${HOST}:${PORT}\n`);
  });
}).catch((err) => {
  console.error('Error starting server:', err);
  process.exit(1);
});



