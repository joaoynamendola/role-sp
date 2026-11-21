import con from '../config/db.js';

export async function listarTodosLocais() {
   const comando = `
     SELECT
      l.id_local AS id,
      l.nome,
      l.e_parceiro AS "eParceiro",
      e.logradouro,
      e.numero,
      e.bairro,
      e.cidade,
      e.estado,
      e.latitude::float8 AS latitude,
      e.longitude::float8 AS longitude,
      fp.descricao AS "faixaPreco",
      fp.valor_estimado AS "valorEstimado",
      COALESCE((
        SELECT array_agg(c.nome ORDER BY c.nome)
        FROM locais_categorias lc
        JOIN categorias c ON c.id_categoria = lc.id_categoria
        WHERE lc.id_local = l.id_local
      ), '{}') AS categorias,
      (SELECT ROUND(AVG(a.nota), 1)::float8
         FROM avaliacoes a WHERE a.id_local = l.id_local) AS "notaMedia",
      (SELECT COUNT(*)::int
         FROM avaliacoes a WHERE a.id_local = l.id_local) AS "totalAvaliacoes"
    FROM locais l
    JOIN enderecos e ON e.id_endereco = l.id_endereco
    JOIN faixas_preco fp ON fp.id_faixa_preco = l.id_faixa_preco
    ORDER BY l.nome    
    `;
   const { rows } = await con.query(comando);
   return rows;
}