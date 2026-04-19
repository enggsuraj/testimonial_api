const { applyApiCors, setRateLimitHeaders } = require("../../../lib/apiCommon");
const { listTestimonials } = require("../../../lib/testimonials");

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

  const result = listTestimonials(req.query);
  if (result.error) {
    return res.status(400).json({
      error: result.error,
      message: "Invalid query parameters.",
    });
  }

  return res.status(200).json({ data: result.data, meta: result.meta });
};
