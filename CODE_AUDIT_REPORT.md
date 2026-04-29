# Code Audit Report — Ideal Deal Vietnam Website
**Date:** 2026-04-30  
**Stack:** React 19 + TypeScript + Vite + Tailwind CSS + EmailJS + Google Gemini AI  
**Audited by:** Senior Software Engineer / Code Auditor  

---

## Table of Contents
1. [Security Vulnerabilities](#1-security-vulnerabilities)
2. [Bugs & Broken Logic](#2-bugs--broken-logic)
3. [Performance Issues](#3-performance-issues)
4. [Architecture & Structure](#4-architecture--structure)
5. [Best Practices & Code Quality](#5-best-practices--code-quality)
6. [SEO & Accessibility](#6-seo--accessibility)
7. [Final Summary](#7-final-summary)

---

## 1. Security Vulnerabilities

---

### 🔴 CRITICAL — Gemini API Key Exposed Client-Side
**File:** `vite.config.ts` (lines 13–16) + `components/ChatBot.tsx` (line 104)

**Description:**  
`vite.config.ts` injects `GEMINI_API_KEY` from `.env.local` directly into the JavaScript bundle via `define`:
```ts
define: {
  'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
  'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
},
```
The ChatBot then uses it:
```ts
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
```
**Anyone can open DevTools → Sources and see the raw API key in the compiled JavaScript.**  
A malicious user can steal this key and run unlimited Gemini API calls at your expense.

**Fix:**  
Move all AI calls to a server-side proxy (your `ai-server/` is already set up for this). The frontend should call your Express server (`/api/chat`), which holds the key securely in `process.env` on the server — never exposed to the browser.

```js
// ai-server/index.js — add a chat endpoint
app.post("/chat", async (req, res) => {
  const { messages, language } = req.body;
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY }); // env var, NOT exposed
  // ... call AI, return response
});
```
Remove `define` from `vite.config.ts` entirely for this key.

---

### 🔴 HIGH — EmailJS Credentials Hardcoded in Source Code
**Files:** `pages/Contact.tsx` (lines 59–70), `pages/Home.tsx` (lines 17–26)

**Description:**  
EmailJS Service ID, Template IDs, and **Public Key** are hardcoded in client-side React components:
```ts
emailjs.send(
  "service_gih8d89",       // Service ID — exposed
  "service_idvn2025",      // Template ID — exposed
  { ... },
  "w9BCLA8UHnXFzQUI0"      // Public Key — exposed
);
```
While EmailJS public keys are technically semi-public, having them hardcoded means they can be extracted and used to send spam/abuse emails through your account.

**Fix:**  
Move these to `.env.local` and access them via `import.meta.env`:
```ts
// .env.local
VITE_EMAILJS_SERVICE_ID=service_gih8d89
VITE_EMAILJS_TEMPLATE_CONTACT=service_idvn2025
VITE_EMAILJS_PUBLIC_KEY=w9BCLA8UHnXFzQUI0
```
```ts
emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT,
  { ... },
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
);
```
Also make sure `.env.local` is in `.gitignore` ✅ (it already is via `*.local`).

---

### 🟡 MEDIUM — CORS Allows All Non-Browser Origins
**File:** `ai-server/index.js` (lines 16–18)

**Description:**  
```js
if (!origin) return callback(null, true); // allows Postman, curl, scripts
```
Any server-to-server or CLI request (curl, Postman, Python scripts) can bypass CORS and hit your backend endpoints freely. While CORS is a browser-only mechanism, combined with no authentication it means your `/recommend` and `/track` endpoints are fully public.

**Fix:**  
Add basic API key authentication to the server:
```js
app.use((req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey !== process.env.INTERNAL_API_KEY) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
});
```

---

### 🟡 MEDIUM — `.env.local` Not in Git but Committed Pattern Risk
**File:** `.env.local`

**Description:**  
The `.env.local` currently contains `GEMINI_API_KEY=PLACEHOLDER_API_KEY`. Once a real key is added, if `.gitignore` is misconfigured or a developer accidentally commits it, the key leaks. The `.gitignore` uses `*.local` which catches `.env.local`, but there is no `.env.example` file to guide developers on what variables are needed.

**Fix:**  
Create a `.env.example` file (committed to git) listing all required vars without values:
```
GEMINI_API_KEY=
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_CONTACT=
VITE_EMAILJS_PUBLIC_KEY=
```

---

## 2. Bugs & Broken Logic

---

### 🔴 HIGH — Loading State Never Reset on Email Validation Failure
**File:** `pages/Contact.tsx` (lines 28–36)

**Description:**  
`setLoading(true)` is called on line 30, but if `validateEmail` fails on line 33, the function returns early with `setEmailError` but **never calls `setLoading(false)`**. This permanently freezes the submit button as "Sending..." after a failed email validation.

```ts
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);         // ← Loading starts here
  setSendError(null);

  if (!validateEmail(formState.email)) {
    setEmailError("Invalid email address");
    return;                 // ← Exits WITHOUT setLoading(false)!
  }
  // ...
  setLoading(true);         // ← Also called again (duplicate)
```

**Fix:**
```ts
if (!validateEmail(formState.email)) {
  setEmailError("Invalid email address");
  setLoading(false); // ← Add this
  return;
}
```
Also remove the duplicate `setLoading(true)` / `setSendError(null)` calls on lines 39–40.

---

### 🔴 HIGH — Wrong Translation Key (`v5` instead of `q5`) in French & Spanish
**File:** `App.tsx` (lines 271 and 843)

**Description:**  
In the French translations block (line 271):
```ts
v5: "¿Cuáles son sus condiciones de pago estándar?",  // Wrong key AND Spanish content!
```
And in the Spanish block (line 843):
```ts
v5: "¿Cuáles son sus condiciones de pago estándar?",  // Wrong key
```
The key is `v5` but all other languages use `q5`. The French entry also contains Spanish text instead of French. This means French users will never see FAQ question 5.

**Fix:**
```ts
// In French block:
q5: "Quelles sont vos conditions de paiement standard?",

// In Spanish block:
q5: "¿Cuáles son sus condiciones de pago estándar?",
```

---

### 🟡 MEDIUM — ChatBot Contact Link Uses Hash Routing With BrowserRouter
**File:** `components/ChatBot.tsx` (line 252)

**Description:**  
```tsx
<a href="#/contact" onClick={() => setIsOpen(false)}>
```
The app uses `BrowserRouter` (HTML5 history), so routes are `/contact`, not `#/contact`. This link will not navigate to the Contact page; it will just add `#/contact` as a hash fragment to the current URL.

**Fix:**
```tsx
import { useNavigate } from 'react-router-dom';
// ...
const navigate = useNavigate();
// ...
<button onClick={() => { setIsOpen(false); navigate('/contact'); }}>
```

---

### 🟡 MEDIUM — Possibly Invalid Gemini Model Name
**File:** `components/ChatBot.tsx` (line 106)

**Description:**  
```ts
model: 'gemini-3-flash-preview',
```
As of the knowledge cutoff, no model named `gemini-3-flash-preview` exists. Valid models include `gemini-1.5-flash`, `gemini-2.0-flash-exp`, `gemini-2.5-pro-preview-05-06`. An invalid model name will cause every chatbot request to fail with an API error.

**Fix:**  
Verify the correct model string in the Google AI documentation and update:
```ts
model: 'gemini-2.0-flash-exp', // or whichever is current/valid
```

---

### 🟡 MEDIUM — Contact Form Labels Are Hardcoded in English (Not i18n)
**File:** `pages/Contact.tsx` (lines 154–242)

**Description:**  
All form labels, button text, success/error messages, and select options use hardcoded English strings instead of the translation system:
```tsx
<label>Full Name</label>           // should be: t('full_name')
<label>Email</label>               // should be: t('email')
{loading ? "Sending..." : "Send Inquiry"}  // should be: t('send_inquiry')
"Message sent successfully..."     // should be: t('success_msg')
```
For an explicitly multilingual website supporting Arabic (RTL), Vietnamese, Chinese, this is a significant UX gap.

**Fix:**  
Replace all hardcoded strings with `t()` calls. All translation keys already exist in `App.tsx`.

---

### 🟡 MEDIUM — `React` Type Not Imported in `Home.tsx`
**File:** `pages/Home.tsx` (line 2)

**Description:**  
```ts
import { useState } from "react";
// ...
const Home: React.FC = () => {  // ← React not imported!
```
`React.FC` is used as a type annotation but `React` is not imported as a default export. This may cause TypeScript errors depending on `tsconfig.json` settings.

**Fix:**
```ts
import React, { useState } from "react";
```
Or use the modern pattern:
```ts
const Home = () => {  // TypeScript infers the type
```

---

### 🟡 MEDIUM — System Messages Mapped to `'user'` Role in ChatBot History
**File:** `components/ChatBot.tsx` (line 107–110)

**Description:**  
```ts
contents: [...messages.map(m => ({
  role: m.role === 'bot' ? 'model' : 'user',  // 'system' role → 'user'!
  ...
```
The `messages` state uses roles `'user' | 'bot' | 'system'`. System messages are incorrectly mapped to the `'user'` role when building the API payload. Google Gemini API also doesn't support a `system` role in `contents` — the system instruction should be in `config.systemInstruction` (which is correctly done), but stray system messages in the chat history will corrupt the conversation context.

**Fix:**  
Filter out system messages from the history sent to the API:
```ts
contents: [...messages
  .filter(m => m.role !== 'system')
  .map(m => ({
    role: m.role === 'bot' ? 'model' : 'user',
    parts: [{ text: m.text }]
  })),
  { role: 'user', parts: [{ text: userMessage }] }
],
```

---

### 🟡 MEDIUM — Shipment Tracking Is Entirely Fake
**File:** `components/ChatBot.tsx` (lines 149–161), `ai-server/index.js` (lines 37–66)

**Description:**  
The chatbot's `trackShipment` tool returns made-up statuses based on whether the ID contains "123", "456", or "789". The AI recommendations endpoint always returns the same 3 hardcoded products regardless of input. Users who submit real tracking IDs will receive misleading information ("Pending Pickup" for any real tracking number).

**Fix:**  
Either connect to a real tracking API or clearly label the feature as a demo/placeholder. At minimum, update the default response to say "Please contact us for real-time tracking" rather than returning a fake status.

---

### 🟢 LOW — `subject` Field Manipulation in Contact Form Has No Effect
**File:** `pages/Contact.tsx` (lines 48–53)

**Description:**  
The code queries the DOM for `input[name="subject"]` and replaces dashes with spaces, but no such input exists in the form (the hidden inputs use `name="user_name"`, `name="message"`, etc.). The `subject` field is also not passed to the `emailjs.send()` params object.

**Fix:**  
Remove the dead DOM manipulation code or add a proper subject field to `formState` and include it in `emailjs.send()`.

---

## 3. Performance Issues

---

### 🟡 MEDIUM — `App.tsx` is 74KB — Translation Strings Should Be Extracted
**File:** `App.tsx`

**Description:**  
The entire 6-language translation dictionary (thousands of lines) is embedded inside `App.tsx`. This means:
- The component is very difficult to read/maintain
- **All 6 languages are bundled and sent to every user**, even though they only need one
- `i18next` and `react-i18next` are already installed but completely unused

**Fix:**  
Use the installed `i18next` library. Create locale files:
```
/src/locales/en.json
/src/locales/ar.json
/src/locales/vi.json
...
```
Configure lazy loading:
```ts
i18n.init({ resources: { en: { translation: enTranslations } }, ... });
```
Or use dynamic imports for each language JSON.

---

### 🟡 MEDIUM — Duplicate Product Images in `public/`
**File:** `public/products/` and `public/products/optimized/`

**Description:**  
Every product image exists twice: once in `/products/` and once in `/products/optimized/`. The UI appears to reference `/products/` (original files). The optimized copies are never used. This doubles the deployment size unnecessarily.

**Fix:**  
Either use the `/optimized/` versions in the code (update image paths in `Products.tsx` and other files) and delete the originals, or delete the `/optimized/` folder entirely if the originals are already compressed enough.

---

### 🟢 LOW — Multiple Separate Google Font & Icon Requests
**File:** `index.html` (lines 10–14)

**Description:**  
Five separate external stylesheet requests are made on page load:
1. Google Fonts preconnect
2. Google Fonts CSS (4 font families)
3. Material Symbols Outlined
4. Material Icons (3 variants)

This blocks initial rendering and adds latency.

**Fix:**  
Combine Material Icons into a single request and consider self-hosting fonts using `@fontsource` packages for zero external DNS lookups.

---

### 🟢 LOW — Hero Background Images Load From Unsplash at Runtime
**Files:** `pages/Home.tsx` (line 37), `index.html` (line 24)

**Description:**  
The hero background images use runtime `https://images.unsplash.com/...` URLs. If Unsplash is slow or down, the hero section renders with no background. Also, external images are not preloaded.

**Fix:**  
Download the hero images, add them to `/public/`, and serve them locally. Add `<link rel="preload">` for the hero image in `index.html`.

---

## 4. Architecture & Structure

---

### 🟡 MEDIUM — `useLanguage` Context Exported From `App.tsx`
**Files:** All components import from `'../App'`

**Description:**  
All components import the `useLanguage` hook from `App.tsx`:
```ts
import { useLanguage } from '../App';
```
This creates a tight coupling — `App.tsx` is simultaneously the root component AND the context provider AND the 74KB translation store. If `App.tsx` is refactored, all imports break.

**Fix:**  
Create a dedicated context file:
```ts
// src/context/LanguageContext.tsx
export const LanguageContext = createContext<...>();
export const useLanguage = () => { ... };
export const LanguageProvider = ({ children }) => { ... };
```

---

### 🟡 MEDIUM — No 404 Route Defined
**File:** `App.tsx` (lines 925–931)

**Description:**  
```tsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/products" element={<Products />} />
  ...
  // No catch-all route!
</Routes>
```
Navigating to any unrecognized URL (e.g., `/blog`, `/typo`) renders a blank page.

**Fix:**
```tsx
import NotFound from './pages/NotFound';
// ...
<Route path="*" element={<NotFound />} />
```

---

### 🟡 MEDIUM — `LanguageSelector` Defined Inside `Navbar` Component
**File:** `components/Navbar.tsx` (line 30–137)

**Description:**  
`LanguageSelector` is a function component defined inside the `Navbar` render function. This means on every Navbar re-render, React sees a new component type and **unmounts + remounts** `LanguageSelector`, losing its internal `open` dropdown state unexpectedly.

**Fix:**  
Move `LanguageSelector` outside of the `Navbar` function (to module scope or a separate file):
```ts
// Before the Navbar component declaration:
const LanguageSelector: React.FC = () => { ... };

const Navbar: React.FC<NavbarProps> = ({ ... }) => { ... };
```

---

### 🟢 LOW — Unused Dependencies in `package.json`
**File:** `package.json`

**Description:**  
The following packages are installed but never used:
- `i18next` — installed but a custom translation system is used instead
- `react-i18next` — same
- `axios` — imported in `Products.tsx` but may not be actively calling the AI server

**Fix:**  
Remove unused packages:
```bash
npm uninstall i18next react-i18next
```
If `axios` is unused in production, remove it too (use the native `fetch` API).

---

### 🟢 LOW — `importmap` in `index.html` Conflicts With Vite Build
**File:** `index.html` (lines 42–51)

**Description:**  
```html
<script type="importmap">
{
  "imports": {
    "react": "https://esm.sh/react@^19.2.3",
    "react-router-dom": "https://esm.sh/react-router-dom@^7.12.0",
    ...
  }
}
</script>
```
This is an ESM importmap for bare-browser-module loading (no bundler). When Vite builds the project, it bundles everything from `node_modules` — this importmap is ignored. Having it here is dead code that causes confusion and could conflict in edge environments.

**Fix:**  
Remove the `<script type="importmap">` block entirely. Vite handles module resolution.

---

### 🟢 LOW — Theme Toggle Button Duplicated (Both Navbar and Floating FAB)
**Files:** `components/Navbar.tsx` (line 174), `App.tsx` (lines 937–945)

**Description:**  
A dark/light mode toggle button exists in two places simultaneously: inside the desktop navbar, and as a floating action button (FAB) in the bottom-left corner. This creates UI redundancy and confuses users about which one to use.

**Fix:**  
Choose one location (the floating FAB or the navbar) and remove the other.

---

## 5. Best Practices & Code Quality

---

### 🟡 MEDIUM — Inline Language Checks Repeated Throughout Components
**Files:** `Home.tsx`, `Navbar.tsx`, `Footer.tsx`, `ChatBot.tsx`

**Description:**  
Instead of using the translation system for every string, many components use repetitive inline ternary chains:
```tsx
{language === 'ar' ? 'قيد الانتقال' : (language === 'vi' ? '...' : (language === 'zh' ? '...' : '...'))}
```
This pattern appears dozens of times, bypasses the translation system, and is impossible to maintain for 6 languages. Some of these strings also exist in the translations object.

**Fix:**  
Always use `t('key')`. Add missing keys to the translations object rather than inlining them.

---

### 🟡 MEDIUM — Footer Navigation Missing the Services Page
**File:** `components/Footer.tsx` (lines 97–102)

**Description:**  
The footer's Navigation section links to Home, Products, About, and Contact — but **Services is missing**.

**Fix:**
```tsx
<li><Link to="/services" className="hover:text-primary transition-colors">{t('services')}</Link></li>
```

---

### 🟢 LOW — TypeScript `any` Casts in ChatBot
**File:** `components/ChatBot.tsx` (lines 128, 145)

**Description:**  
```ts
const { name, date, time, topic } = fc.args as any;
const { trackingId } = fc.args as any;
```
Using `as any` disables TypeScript's type checking. If the API returns unexpected argument shapes, the app will silently fail or crash.

**Fix:**  
Define interfaces for the function call arguments:
```ts
interface BookAppointmentArgs { name: string; email: string; date: string; time?: string; topic?: string; }
const args = fc.args as BookAppointmentArgs;
```

---

### 🟢 LOW — `console.error` Left in Production Code
**Files:** `components/ChatBot.tsx` (line 168), `pages/Home.tsx` (catch block), `ai-server/index.js`

**Description:**  
`console.error(error)` calls in catch blocks will print stack traces to end users' browser consoles in production, potentially leaking implementation details.

**Fix:**  
Use a proper logging strategy. In production, suppress or send errors to an error tracking service (e.g., Sentry):
```ts
if (import.meta.env.DEV) console.error(error);
```

---

### 🟢 LOW — Social Media & Legal Links Are Dead (`href="#"`)
**File:** `components/Footer.tsx` (lines 84–113)

**Description:**  
All social media icons (LinkedIn, Instagram) and legal pages (Privacy Policy, Terms of Service, Cookie Policy) link to `#`. This looks unprofessional and can harm SEO.

**Fix:**  
Either create the legal pages as separate routes or remove the links until they're ready. For social media, add the actual company profile URLs.

---

## 6. SEO & Accessibility

---

### 🟡 MEDIUM — No Per-Page Meta Title/Description Updates
**File:** `index.html`, all page components

**Description:**  
The `<title>` tag in `index.html` is static: `"Ideal Deal Vietnam - Built On Trust"`. It never changes as users navigate between pages. Search engines will see the same title for all 5 pages.

**Fix:**  
Use a `useEffect` in each page to update `document.title`, or better, add `react-helmet-async`:
```tsx
// pages/Products.tsx
import { Helmet } from 'react-helmet-async';
<Helmet>
  <title>Products – Vietnamese Agricultural & Consumer Exports | Ideal Deal Vietnam</title>
  <meta name="description" content="Browse our range of premium Vietnamese export products..." />
</Helmet>
```

---

### 🟡 MEDIUM — Missing Open Graph & Twitter Card Meta Tags
**File:** `index.html`

**Description:**  
No `og:title`, `og:description`, `og:image`, `og:url`, or `twitter:card` tags exist. Sharing the site on LinkedIn, Facebook, or WhatsApp (key for B2B trade) will show a blank preview.

**Fix:**  
Add to `index.html`:
```html
<meta property="og:title" content="Ideal Deal Vietnam – Your Trusted Import & Export Partner" />
<meta property="og:description" content="Premium Vietnamese products to global markets." />
<meta property="og:image" content="https://idealdealvn.com/ideal-deal-vn-logo.png" />
<meta property="og:type" content="website" />
```

---

### 🟡 MEDIUM — Google Maps iframe Missing `title` Attribute
**File:** `pages/Contact.tsx` (line 321)

**Description:**  
```tsx
<iframe
  src="https://www.google.com/maps/..."
  className="w-full h-full border-0"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
```
iframes require a `title` attribute for screen readers (WCAG 2.1 criterion 4.1.2).

**Fix:**
```tsx
<iframe
  title="Ideal Deal Vietnam office location on Google Maps"
  ...
/>
```

---

### 🟡 MEDIUM — Form Inputs Missing `id` / `htmlFor` Association
**File:** `pages/Contact.tsx`

**Description:**  
Labels and their corresponding inputs are visually stacked but have no programmatic association via `id` / `htmlFor`. Screen readers cannot link the label to its input.

**Fix:**
```tsx
<label htmlFor="full-name">Full Name</label>
<input id="full-name" type="text" ... />
```

---

### 🟢 LOW — No `lang` Attribute Update for Translated Content in `<head>`
**File:** `App.tsx` (lines 908–912)

**Description:**  
The app correctly updates `html.setAttribute('lang', language)` and `html.setAttribute('dir', ...)` when language changes. This is good! However, `index.html` statically sets `<html lang="en">`, which is only corrected once React mounts. For SSR or search engine bots reading the HTML before JS runs, the language is always "en" — even for Arabic or Chinese content.

**Fix:**  
This is acceptable for a pure SPA. For better SEO, consider pre-rendering with a tool like Vite SSG or adding `<link rel="alternate" hreflang="...">` tags.

---

### 🟢 LOW — No Skip Navigation Link
**File:** `index.html` / `App.tsx`

**Description:**  
Keyboard-only users must tab through the entire Navbar before reaching main content on every page navigation.

**Fix:**
```html
<a href="#main-content" class="sr-only focus:not-sr-only">Skip to main content</a>
```
And add `id="main-content"` to the `<main>` element.

---

### 🟢 LOW — Sitemap Missing `lastmod` Dates
**File:** `public/sitemap.xml`

**Description:**  
The sitemap lacks `<lastmod>` tags. While not strictly required, Google recommends them for crawl prioritization.

**Fix:**  
```xml
<url>
  <loc>https://idealdealvn.com/</loc>
  <lastmod>2026-04-30</lastmod>
  <changefreq>weekly</changefreq>
  <priority>1.0</priority>
</url>
```

---

## 7. Final Summary

---

### Top 5 Critical Issues to Fix Immediately

| # | Issue | File | Severity |
|---|-------|------|----------|
| 1 | **Gemini API key exposed in client JS bundle** | `vite.config.ts`, `ChatBot.tsx` | 🔴 CRITICAL |
| 2 | **EmailJS credentials hardcoded in source** | `Contact.tsx`, `Home.tsx` | 🔴 HIGH |
| 3 | **Loading state never resets on email validation failure** | `Contact.tsx` | 🔴 HIGH |
| 4 | **Wrong translation key `v5` (French FAQ Q5 shows nothing)** | `App.tsx` | 🔴 HIGH |
| 5 | **ChatBot "Contact Support" link broken (hash routing mismatch)** | `ChatBot.tsx` | 🟡 MEDIUM |

---

### Overall Code Quality Rating: **5.5 / 10**

**Strengths:**
- Solid UI design and responsive layout using Tailwind
- Good RTL (Arabic) and multilingual structure overall
- Dark mode implementation is clean
- Chatbot architecture with tool-calling is ambitious and forward-thinking
- Vercel deployment config and robots/sitemap are present
- Image optimization scripts exist (`compress-images.js`)

**Weaknesses:**
- API key security is a critical production risk
- `App.tsx` is a 74KB monolith that mixes routing, theming, translation, and context
- i18next installed but a manual system used instead (wasted bundle space)
- Hardcoded English text in Contact form breaks the i18n promise
- No 404 page, no per-page SEO metadata
- Several bugs that directly affect UX (loading freeze, broken link, invalid model name)

---

### Key Recommendations for Long-Term Improvement

1. **Security first:** Move the Gemini API key to the `ai-server` proxy immediately before going live.
2. **Split `App.tsx`:** Extract translations to `src/locales/*.json`, context to `src/context/`, and actually use the installed `i18next` for lazy-loaded, professional i18n.
3. **Consolidate the translation system:** Eliminate all inline `language === 'ar' ? '...' : '...'` ternaries across components. Use `t()` exclusively.
4. **Add `react-helmet-async`** for per-page SEO metadata — essential for a B2B company site.
5. **Add a proper error boundary and 404 page** to prevent blank-screen failures.
6. **Replace fake tracking/recommendations** with real data or clearly label them as "coming soon."
7. **Delete `public/products/` duplicates** — keep only the `/optimized/` folder and update paths.
8. **Run `npm uninstall i18next react-i18next axios`** if those packages are not used, to reduce bundle size.
