const express = require("express");
const cors = require("cors");

const app = express();

// ✅ الدومينات المسموح لها تنادي السيرفر
const allowedOrigins = [
  "https://www.idealdealvn.com",
  "https://idealdealvn.com"
];

// ✅ CORS مضبوط
app.use(
  cors({
    origin: function (origin, callback) {
      // لو الطلب جاي من Postman/Server (origin فاضي) سيبه يعدي
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) return callback(null, true);

      return callback(new Error("Not allowed by CORS: " + origin));
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: false
  })
);

app.use(express.json());

// ✅ للتجربة السريعة من المتصفح
app.get("/", (req, res) => {
  res.status(200).send("AI server is running ✅");
});

// Endpoint اللي الفرونت بيناديه
app.post("/recommend", async (req, res) => {
  try {
    const { tab, history } = req.body;

    const recommendations = [
      {
        title: "Vietnam Premium Robusta Coffee",
        description: "High quality Robusta beans suitable for Middle East markets.",
        category: "Coffee",
        reason: "User viewed coffee and agriculture products recently."
      },
      {
        title: "Vietnam Cashew Kernels WW320",
        description: "Export grade cashew nuts with international standards.",
        category: "Nuts",
        reason: "Matches user's interest in agricultural exports."
      },
      {
        title: "Frozen Pangasius Fillet",
        description: "Well processed frozen fish for wholesale trading.",
        category: "Seafood",
        reason: "User browsed seafood and manufacturing categories."
      }
    ];

    res.json(recommendations);
  } catch (err) {
    console.error("AI recommendation error:", err);
    res.status(500).json({ error: "AI recommendation failed" });
  }
});
// ✅ Tracking endpoint
app.post("/track", (req, res) => {
  try {
    const { product, tab, history } = req.body;

    // حالياً بنسجل في اللوج بس
    console.log("TRACK:", { product, tab, history });

    res.json({ ok: true });
  } catch (err) {
    console.error("Track error:", err);
    res.status(500).json({ error: "Track failed" });
  }
});
// ✅ Render بيدي PORT لوحده
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log("AI Server running on port", PORT));