const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'KinoVibe',
  password: 'postgres',
  port: 5432, // Порт по умолчанию для PostgreSQL
});

// Экспортируйте пул для использования в других частях приложения
module.exports = pool;