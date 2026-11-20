const { Pool } = require('pg');

if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL não definida. Confira o arquivo .env.');
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 5,
});

pool.on('error', (erro) => {
  console.error('Erro inesperado na conexão com o banco:', erro.message);
});

module.exports = pool;