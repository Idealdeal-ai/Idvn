const express = require("express");
const cors = require("cors");
const { GoogleGenAI } = require("@google/genai");

const app = express();

// Allowed browser origins — add localhost for local dev
const allowedOrigins = [
  "https://www.idealdealvn.com",
  "https://idealdealvn.com",
  "http://localhost:3000",
  "http://localhost:5173",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow server-to-server or Postman (no origin header)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error("Not allowed by CORS: " + origin));
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: false,
  })
);

app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.status(200).send("AI server is running ✅");
});

// ---------------------------------------------------------------------------
// /chat — Gemini proxy (keeps the API key server-side)
// ---------------------------------------------------------------------------
app.post("/chat", async (req, res) => {
  try {
    const { messages, language } = req.body;

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ error: "GEMINI_API_KEY not configured on server." });
    }

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    const languageMap = {
      ar: "Arabic",
      en: "English",
      vi: "Vietnamese",
      zh: "Simplified Chinese",
      es: "Spanish",
      fr: "French",
    };
    const respondIn = languageMap[language] || "English";

    // Build the contents array — map client roles to Gemini roles
    const contents = (messages || [])
      .filter((m) => m.role === "user" || m.role === "bot")
      .map((m) => ({
        role: m.role === "bot" ? "model" : "user",
        parts: [{ text: m.text }],
      }));

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents,
      config: {
        systemInstruction: `You are 'Ideal', the premium AI assistant for Ideal Deal Vietnam.
Your goal is to help international buyers source products from Vietnam (Agriculture, Manufacturing, Consumer Goods).
You are professional, polite, and efficient.
You can provide info on company services: Product Sourcing, Supplier Identification, Quality Assurance, and Logistics.
If a user wants to book an appointment, acknowledge it and ask for their name, email, and preferred date.
If a user wants to track a shipment, ask for their tracking number.
Respond in ${respondIn}.`,
      },
    });

    const text = response.text || "";
    res.json({ text });
  } catch (err) {
    console.error("Chat error:", err);
    res.status(500).json({ error: "Chat request failed." });
  }
});

// ---------------------------------------------------------------------------
// /recommend — AI-powered product recommendations
// ---------------------------------------------------------------------------
app.post("/recommend", async (req, res) => {
  try {
    const { tab, history } = req.body;

    // If Gemini key is available, generate real recommendations
    if (process.env.GEMINI_API_KEY) {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

      const historyStr = Array.isArray(history) && history.length
        ? history.join(", ")
        : "none";

      const prompt = `You are a product recommendation engine for Ideal Deal Vietnam, a Vietnamese export company.
The user is browsing the "${tab}" category. Their recent product interaction history: ${historyStr}.
Suggest 3 relevant Vietnamese export products they might be interested in.
Return a JSON array with exactly 3 objects. Each object must have: title (string), description (string), category (string), reason (string).
Return ONLY the JSON array, no markdown fences.`;

      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: [{ role: "user", parts: [{ text: prompt }] }],
      });

      try {
        const parsed = JSON.parse(response.text || "[]");
        if (Array.isArray(parsed)) {
          return res.json(parsed);
        }
      } catch (_) {
        // Fall through to static fallback
      }
    }

    // Static fallback when Gemini is unavailable
    const recommendations = [
      {
        title: "Vietnam Premium Robusta Coffee",
        description: "High quality Robusta beans suitable for Middle East markets.",
        category: "Coffee",
        reason: "Popular Vietnamese export product.",
      },
      {
        title: "Vietnam Cashew Kernels WW320",
        description: "Export grade cashew nuts meeting international standards.",
        category: "Nuts",
        reason: "Top Vietnamese agricultural export.",
      },
      {
        title: "Frozen Pangasius Fillet",
        description: "Well-processed frozen fish for wholesale trading.",
        category: "Seafood",
        reason: "Highly demanded Vietnamese seafood export.",
      },
    ];

    res.json(recommendations);
  } catch (err) {
    console.error("Recommendation error:", err);
    res.status(500).json({ error: "Recommendation failed." });
  }
});

// ---------------------------------------------------------------------------
// /track — Product interaction tracking
// ---------------------------------------------------------------------------
app.post("/track", (req, res) => {
  try {
    const { product, tab, history } = req.body;
    console.log("TRACK:", { product, tab, history });
    res.json({ ok: true });
  } catch (err) {
    console.error("Track error:", err);
    res.status(500).json({ error: "Track failed." });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log("AI Server running on port", PORT));
