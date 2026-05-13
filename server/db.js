// ============================================================
// db.js — Database Connection
// Creates a shared "pool" of Postgres connections.
// A pool is more efficient than opening a new connection
// for every single request.
// ============================================================

const { Pool } = require('pg');   // pg = node-postgres library
require('dotenv').config();        // loads variables from .env file

// Validate that the required env variable exists at startup
if (!process.env.DATABASE_URL) {
  console.error('FATAL: DATABASE_URL environment variable is not set.');
  process.exit(1); // stop the server immediately with an error code
}

// Create the connection pool using the DATABASE_URL string
// pg automatically parses the URL into host/user/password/db/port
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,

  // Required for Supabase — their servers use SSL certificates
  ssl: { rejectUnauthorized: false }
});

// Test the connection once on startup so we know immediately
// if the credentials are wrong, rather than failing on first request
pool.connect((err, client, release) => {
  if (err) {
    console.error('ERROR: Could not connect to database:', err.message);
  } else {
    console.log('✅ Database connected successfully');
    release(); // return the test connection back to the pool
  }
});

// Export the pool so models can use it to run queries
module.exports = pool;