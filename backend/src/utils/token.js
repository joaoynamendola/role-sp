import jwt from 'jsonwebtoken';

if (!process.env.JWT_SECRET) {
  console.error('JWT_SECRET não definida. Confira o arquivo .env.');
}

export function gerarToken(usuario) {
  return jwt.sign(
    { id: usuario.id, tipo: usuario.tipo },
    process.env.JWT_SECRET,
    { algorithm: 'HS256', expiresIn: process.env.JWT_EXPIRA_EM || '7d' }
  );
}

export function verificarToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET, { algorithms: ['HS256'] });
}