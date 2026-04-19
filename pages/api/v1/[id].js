const { applyApiCors, setRateLimitHeaders } = require("../../../lib/apiCommon");
const { getById } = require("../../../lib/testimonials");

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

  const testimonial = getById(req.query.id);
  if (!testimonial) {
    return res.status(404).json({ error: "not_found" });
  }

  return res.status(200).json(testimonial);
};
