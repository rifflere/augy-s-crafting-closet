// ============================================================
// routes/yarnRoutes.js — Yarn Routes
// The "V" layer boundary in MVC (the router maps URLs to controllers).
// Keeps server.js clean by grouping related routes together.
// ============================================================

const express = require('express');
const router = express.Router(); // Express mini-app just for routing
const { getYarns } = require('../controllers/yarnController');

// GET /yarns — returns all yarns as a JSON array
// When a request hits /yarns, Express calls getYarns()
router.get('/', getYarns);

module.exports = router;