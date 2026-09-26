const http = require("http");

const routes = [
  "/",
  "/about-us",
  "/contact-us",
  "/corporate-training",
  "/placement",
  "/internship",
  "/become-a-teacher",
  "/blog",
  "/blog/aws-interview-questions",
  "/faq",
  "/locations",
  "/locations/marathahalli",
  "/trainers",
  "/testimonials",
  "/privacy-policy",
  "/terms-and-conditions",
  "/courses",
  "/courses/category/cloud-computing",
  "/courses/aws-certified-solutions-architect",
  "/courses/python-full-stack-course",
  "/courses/data-science-course"
];

async function checkRoute(route) {
  return new Promise((resolve) => {
    http.get(`http://127.0.0.1:3000${route}`, (res) => {
      let data = "";
      res.on("data", chunk => data += chunk);
      res.on("end", () => {
        resolve({ route, status: res.statusCode, length: data.length });
      });
    }).on("error", (err) => {
      resolve({ route, status: "ERR", error: err.message });
    });
  });
}

async function run() {
  console.log("Checking all routes on http://127.0.0.1:3000 ...");
  for (const r of routes) {
    const res = await checkRoute(r);
    console.log(`[${res.status}] ${res.route} (${res.length || 0} bytes)`);
  }
}

run();
