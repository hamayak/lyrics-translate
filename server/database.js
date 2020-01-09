const { Pool } = require('pg');
// Add postsgreSQL database as a client

const pool = new Pool({
  connectionString: 'postgres://uixdrufrnxeufc:ccd1db0be00663bfffdfcb4350353d1008b5cb57d40616831ea4abe43db7d515@ec2-176-34-183-20.eu-west-1.compute.amazonaws.com:5432/d8i8id1i7agpmo',
  ssl: true
});

module.exports = pool;
