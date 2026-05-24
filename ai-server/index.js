const express = require("express");
const cors = require("cors");

const app = express();

const allowedOrigins = [
  "https://www.idealdealvn.com",
  "https://idealdealvn.com",
  "http://localhost:3000",
  "http://localhost:5173",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error("Not allowed by CORS: " + origin));
    },
    methods: ["GET", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
    credentials: false,
  })
);

// Health check
app.get("/", (req, res) => {
  res.status(200).send("Server is running \u2705");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log("Server running on port", PORT));
