const { rawCount } = require("./testimonials");

const PUBLIC_BASE = "https://testimonialapi.toolcarton.com";

function getOpenApiSpec() {
  return {
    openapi: "3.0.3",
    info: {
      title: "Testimonial API",
      version: "1.0.0",
      description:
        "Mock customer testimonial JSON for prototyping. Legacy routes under `/api` are deprecated in favor of `/api/v1`.",
    },
    servers: [{ url: PUBLIC_BASE }],
    paths: {
      "/api/v1": {
        get: {
          summary: "List testimonials",
          parameters: [
            {
              name: "limit",
              in: "query",
              schema: { type: "integer", minimum: 1, maximum: 50, default: 10 },
            },
            {
              name: "offset",
              in: "query",
              schema: { type: "integer", minimum: 0, default: 0 },
            },
            {
              name: "minRating",
              in: "query",
              schema: { type: "number", minimum: 0, maximum: 5 },
            },
            { name: "q", in: "query", schema: { type: "string" } },
            {
              name: "sort",
              in: "query",
              schema: {
                type: "string",
                enum: ["asc", "desc", "random"],
                default: "asc",
              },
            },
            {
              name: "seed",
              in: "query",
              description:
                "Used with sort=random for reproducible ordering (deterministic shuffle).",
              schema: { type: "integer" },
            },
          ],
          responses: {
            "200": {
              description: "Paginated list",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/TestimonialList" },
                },
              },
            },
            "400": { description: "Invalid query parameters" },
          },
        },
      },
      "/api/v1/{id}": {
        get: {
          summary: "Get one testimonial by id",
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "integer", minimum: 1, maximum: rawCount },
            },
          ],
          responses: {
            "200": {
              description: "Single testimonial",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/Testimonial" },
                },
              },
            },
            "404": { description: "Not found" },
          },
        },
      },
      "/api/v1/random": {
        get: {
          summary: "Random testimonial",
          responses: {
            "200": {
              description: "One random testimonial",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/Testimonial" },
                },
              },
            },
          },
        },
      },
      "/api/openapi": {
        get: {
          summary: "OpenAPI document (this spec)",
          responses: {
            "200": {
              description: "OpenAPI JSON",
              content: {
                "application/json": {
                  schema: { type: "object" },
                },
              },
            },
          },
        },
      },
    },
    components: {
      schemas: {
        Testimonial: {
          type: "object",
          additionalProperties: true,
          properties: {
            id: { type: "integer" },
            name: { type: "string" },
            location: { type: "string" },
            designation: { type: "string" },
            company: { type: "string" },
            avatar: { type: "string", format: "uri" },
            avatarThumb: { type: "string", format: "uri" },
            message: { type: "string" },
            lorem: { type: "string" },
            rating: { type: "number" },
            stars: { type: "integer", minimum: 1, maximum: 5 },
            reviewSource: { type: "string" },
            audio: { type: "string", format: "uri" },
            createdAt: { type: "string", format: "date-time" },
            verified: { type: "boolean" },
            locale: { type: "string" },
            tags: { type: "array", items: { type: "string" } },
            social: {
              type: "object",
              properties: {
                twitter: { type: "string", format: "uri" },
                linkedin: { type: "string", format: "uri" },
              },
            },
          },
        },
        TestimonialList: {
          type: "object",
          properties: {
            data: {
              type: "array",
              items: { $ref: "#/components/schemas/Testimonial" },
            },
            meta: {
              type: "object",
              properties: {
                total: { type: "integer" },
                limit: { type: "integer" },
                offset: { type: "integer" },
                sort: { type: "string" },
                seed: { type: "integer" },
              },
            },
          },
        },
      },
    },
  };
}

module.exports = { getOpenApiSpec, PUBLIC_BASE };
