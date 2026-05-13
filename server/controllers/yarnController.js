// ============================================================
// controllers/yarnController.js — Yarn Controller
// The "C" in MVC. Handles HTTP requests and responses.
// It calls the model to get data, then sends it back as JSON.
// Controllers should NOT contain SQL — that lives in the model.
// ============================================================

const { getAllYarns } = require('../models/yarnModel');

// getYarns — handles GET /yarns
// async/await because database calls take time (they're async)
const getYarns = async (req, res) => {
  try {
    // Ask the model for data
    const yarns = await getAllYarns();

    // Send back a 200 OK response with the yarns as JSON
    res.status(200).json(yarns);

  } catch (error) {
    // If anything goes wrong (DB down, bad query, etc.)
    // log the full error on the server but send a clean message to the client
    console.error('Error fetching yarns:', error.message);
    res.status(500).json({ error: 'Failed to fetch yarns. Please try again.' });
  }
};

module.exports = { getYarns };