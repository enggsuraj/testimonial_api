// @ts-check
const { test, expect } = require("@playwright/test");

test("GET /api/v1 returns paginated shape", async ({ request }) => {
  const res = await request.get("/api/v1?limit=2&offset=0&sort=asc");
  expect(res.ok()).toBeTruthy();
  const json = await res.json();
  expect(json.data).toHaveLength(2);
  expect(json.meta.total).toBe(10);
  expect(json.meta.limit).toBe(2);
  expect(res.headers()["x-ratelimit-limit"]).toBeTruthy();
});

test("GET /api/v1/{id} returns enriched object", async ({ request }) => {
  const res = await request.get("/api/v1/3");
  expect(res.ok()).toBeTruthy();
  const json = await res.json();
  expect(json.id).toBe(3);
  expect(json.company).toBeTruthy();
  expect(json.stars).toBeGreaterThanOrEqual(1);
});

test("GET /api/v1/random returns one item", async ({ request }) => {
  const res = await request.get("/api/v1/random");
  expect(res.ok()).toBeTruthy();
  const json = await res.json();
  expect(json.id).toBeGreaterThanOrEqual(1);
  expect(json.id).toBeLessThanOrEqual(10);
});

test("GET /api/openapi returns OpenAPI JSON", async ({ request }) => {
  const res = await request.get("/api/openapi");
  expect(res.ok()).toBeTruthy();
  const json = await res.json();
  expect(json.openapi).toBe("3.0.3");
  expect(json.paths["/api/v1"]).toBeTruthy();
});

test("legacy GET /api includes Deprecation header", async ({ request }) => {
  const res = await request.get("/api");
  expect(res.ok()).toBeTruthy();
  expect(res.headers().deprecation).toBe("true");
  const json = await res.json();
  expect(Array.isArray(json)).toBe(true);
  expect(json[0].company).toBeTruthy();
});
