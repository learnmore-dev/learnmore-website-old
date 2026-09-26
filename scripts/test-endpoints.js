const http = require('http');

const testUrls = [
  '/',
  '/courses',
  '/about-us',
  '/python-training-in-bangalore',
  '/generative-ai-course-in-whitefield',
  '/data-science-training-in-germany',
  '/sap-fico-syllabus',
  '/microsoft-azure-course',
  '/power-bi-course-in-marathahalli',
  '/sitemap.xml'
];

async function checkUrl(path) {
  return new Promise((resolve) => {
    const req = http.get({
      hostname: 'localhost',
      port: 3001,
      path: path,
      timeout: 30000,
    }, (res) => {
      let body = '';
      res.on('data', (chunk) => { body += chunk; });
      res.on('end', () => {
        resolve({
          path,
          statusCode: res.statusCode,
          contentType: res.headers['content-type'],
          length: body.length,
          titleSnippet: body.includes('<title>') ? body.match(/<title>([^<]+)<\/title>/)?.[1] : 'No Title Tag',
          ok: res.statusCode >= 200 && res.statusCode < 400
        });
      });
    });

    req.on('error', (err) => {
      resolve({ path, statusCode: 'ERROR', error: err.message, ok: false });
    });

    req.on('timeout', () => {
      req.destroy();
      resolve({ path, statusCode: 'TIMEOUT', ok: false });
    });
  });
}

async function run() {
  console.log("Testing migrated endpoint responses on http://localhost:3001...\n");
  for (const url of testUrls) {
    const result = await checkUrl(url);
    console.log(`[${result.ok ? 'PASS' : 'FAIL'}] ${result.path} -> Status: ${result.statusCode} | Title: ${result.titleSnippet || ''}`);
  }
}

run();
