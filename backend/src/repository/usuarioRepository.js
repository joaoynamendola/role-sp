import con from '../config/db.js';

export async function buscarUsuarioPorEmail(email) {
    const comando = `
     SELECT
      id_usuario AS id,
      nome_usuario AS nome,
      email,
      senha_hash AS "senhaHash",
      tipo_usuario AS tipo
    FROM usuarios
    WHERE LOWER(email) = $1  
    `

    const { rows } = await con.query(comando, [email]);
    return rows[0]
}

export async function buscarUsuarioPorId(id) {
    const comando = `
     SELECT
      id_usuario AS id,
      nome_usuario AS nome,
      email,
      tipo_usuario AS tipo,
      criado_em AS "criadoEm"
    FROM usuarios
    WHERE id_usuario = $1
  `;

    const { rows } = await con.query(comando, [id]);
    return rows[0];
}

export async function inserirUsuario(nome, email, senhaHash, dataNascimento) {
    const comando = `
    INSERT INTO usuarios
      (nome_usuario, email, senha_hash, data_nascimento, tipo_usuario, aceite_termos_em, criado_em)
    VALUES
      ($1, $2, $3, $4, 'comum', NOW(), NOW())
    RETURNING
      id_usuario AS id,
      nome_usuario AS nome,
      email,
      tipo_usuario AS tipo
  `;

    const { rows } = await con.query(comando, [nome, email, senhaHash, dataNascimento]);
    return rows[0];
}