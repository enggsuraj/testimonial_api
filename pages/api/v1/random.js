const { applyApiCors, setRateLimitHeaders } = require("../../../lib/apiCommon");
const { getRandomOne } = require("../../../lib/testimonials");

module.exports = async function handler(req, res) {
  await applyApiCors(req, res);
  setRateLimitHeaders(res);

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method === "HEAD") {
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    return res.status(200).end();
  }

  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET", "HEAD", "OPTIONS"]);
    return res.status(405).json({ error: "method_not_allowed" });
  }

  return res.status(200).json(getRandomOne());
};
