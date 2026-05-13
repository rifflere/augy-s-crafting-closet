// ============================================================
// server.js — Express App Entry Point
// Wires everything together: middleware, routes, and startup.
// Run with: node server.js
// ============================================================

const express = require('express');
const cors    = require('cors');
require('dotenv').config(); // must be first so env vars are available

// ---- Startup validation ----
// If any required variable is missing, tell the developer clearly
// and stop immediately rather than running in a broken state
const required = ['DATABASE_URL', 'PORT', 'CLIENT_ORIGIN'];
required.forEach(key => {
  if (!process.env[key]) {
    console.error(`FATAL: Missing required environment variable: ${key}`);
    process.exit(1);
  }
});

const app  = express();
const PORT = process.env.PORT || 3001;

// ---- Middleware ----

// CORS — controls which origins (URLs) are allowed to call this API
// In development CLIENT_ORIGIN is localhost:5173 (Vite's default port)
// In production it will be your Netlify URL
app.use(cors({
  origin: process.env.CLIENT_ORIGIN,
  methods: ['GET'], // this API is read-only
}));

// Parse incoming JSON request bodies (not needed for GET-only,
// but good practice to include for future expansion)
app.use(express.json());

// ---- Routes ----
const yarnRoutes = require('./routes/yarnRoutes');

// Mount yarn routes at /yarns
// So GET /yarns → yarnRoutes → yarnController → yarnModel
app.use('/yarns', yarnRoutes);

// ---- Health check ----
// A simple root route so Render (and you) can confirm the server is alive
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: "Augy's Crafting Closet API is running 🧶" });
});

// ---- Start the server ----
app.listen(PORT, () => {
  console.log(`🧶 Server running on http://localhost:${PORT}`);
  console.log(`   Accepting requests from: ${process.env.CLIENT_ORIGIN}`);
});