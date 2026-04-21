test("GET TO /api/v1/status should return 200", async () => {
  const response = await fetch(
    "https://fantastic-waddle-p5xqw4j5j5wh6rv4-3000.app.github.dev//api/v1/status",
  );
  expect(response.status).toBe(200);
});
