const pool = require('../config/db');

async function verificarBanco(req, res) {
  try {
    const resultado = await pool.query('SELECT NOW() AS hora');
    res.json({ ok: true, hora: resultado.rows[0].hora });
  } catch (erro) {
    console.error('Erro ao consultar o banco:', erro.message);
    res.status(500).json({ ok: false, mensagem: 'Não foi possível conectar ao banco.' });
  }
}

module.exports = { verificarBanco };