const nextCorsPkg = require("nextjs-cors");
const NextCors = nextCorsPkg.default || nextCorsPkg;

async function applyApiCors(req, res) {
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "OPTIONS"],
    origin: "*",
    optionsSuccessStatus: 200,
  });
}

function setRateLimitHeaders(res) {
  const now = Math.floor(Date.now() / 1000);
  const windowSec = 3600;
  const reset = now - (now % windowSec) + windowSec;
  res.setHeader("X-RateLimit-Limit", "1000");
  res.setHeader("X-RateLimit-Remaining", "999");
  res.setHeader("X-RateLimit-Reset", String(reset));
  res.setHeader("X-RateLimit-Policy", `1000;w=${windowSec}`);
}

function setDeprecationHeaders(res, successorPath) {
  res.setHeader("Deprecation", "true");
  res.setHeader(
    "Link",
    `<${successorPath}>; rel="successor-version"`
  );
}

module.exports = {
  applyApiCors,
  setRateLimitHeaders,
  setDeprecationHeaders,
};
