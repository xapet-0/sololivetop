const port = process.env.PORT ? Number(process.env.PORT) : 4000;

if (!Number.isFinite(port)) {
  throw new Error("Invalid PORT value");
}

const start = async () => {
  const http = await import("node:http");
  const server = http.createServer((req, res) => {
    if (req.url === "/health") {
      res.statusCode = 200;
      res.setHeader("content-type", "application/json");
      res.end(JSON.stringify({ status: "ok" }));
      return;
    }

    res.statusCode = 200;
    res.setHeader("content-type", "text/plain; charset=utf-8");
    res.end("API is running");
  });

  server.listen(port, () => {
    console.log(`API listening on http://localhost:${port}`);
  });
};

start();
