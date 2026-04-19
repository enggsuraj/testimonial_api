import NextCors from "nextjs-cors";
import data from "../../data/data.";

const getTestimonials = (id) =>
  data.find((n) => n.id === parseInt(String(id), 10));

export default async function handler(req, res) {
  await NextCors(req, res, {
    methods: ["GET"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end();
  }

  const testimonialData = getTestimonials(req.query.id);

  if (!testimonialData) {
    return res.status(404).end();
  }

  return res.json(testimonialData);
}
