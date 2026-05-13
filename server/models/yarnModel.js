// ============================================================
// models/yarnModel.js — Yarn Model
// The "M" in MVC. All SQL queries related to yarns live here.
// Controllers call these functions; they never write SQL directly.
// ============================================================

const pool = require('../db'); // import the shared connection pool

// getAllYarns — fetches every row from the yarns table
// Returns them ordered by label alphabetically
const getAllYarns = async () => {
  // pool.query() sends SQL to Postgres and returns a promise
  // We use $1, $2 etc. for parameterized queries (safe from SQL injection)
  // This query has no parameters, so we just pass the SQL string
  const result = await pool.query(
    'SELECT id, color, label, quantity FROM yarns ORDER BY label ASC'
  );

  // result.rows is an array of plain JS objects, one per row
  // e.g. [{ id: 1, color: '#E63946', label: 'Cherry Red', quantity: '3.0' }]
  return result.rows;
};

module.exports = { getAllYarns };