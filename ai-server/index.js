const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Endpoint اللي الفرونت بيناديه
app.post("/recommend", async (req, res) => {
  try {
    const { tab, history } = req.body;

    // مؤقتًا: توصيات تجريبية (بدون AI حقيقي)
    const recommendations = [
      {
        title: "Vietnam Premium Robusta Coffee",
        description: "High quality Robusta beans suitable for Middle East markets.",
        category: "Coffee",
        reason: "User viewed coffee and agriculture products recently."
      },
      {
        title: "Vietnam Cashew Kernels WW320",
        description: "Export-grade cashew nuts with international standards.",
        category: "Nuts",
        reason: "Matches user's interest in agricultural exports."
      },
      {
        title: "Frozen Pangasius Fillet",
        description: "Well-processed frozen fish for wholesale trading.",
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

// شغل السيرفر على نفس البورت اللي الفرونت بيناديه
app.listen(3001, () => {
  console.log("AI Server running on http://localhost:3001");
});