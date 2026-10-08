import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    success: true,
    data: {
      service: "DevConnect API",
      status: "healthy",
    },
    message: "DevConnect API is running",
  });
});

app.get("/api/health", (_req, res) => {
  res.json({
    success: true,
    data: {
      status: "healthy",
      timestamp: new Date().toISOString(),
    },
    message: "API is healthy",
  });
});

const PORT = 5000;

app.use((_req, res) => {
  res.status(404).json({
    success: false,
    data: null,
    message: "Route not found",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});