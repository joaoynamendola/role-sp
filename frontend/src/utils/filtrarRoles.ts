import { Filtros } from '../constants/filtros';
import { Role } from '../data/roles';

function normalizar(texto: string): string {
  return texto
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

export function filtrarRoles(lista: Role[], filtros: Filtros): Role[] {
  const termo = normalizar(filtros.consulta);

  return lista.filter((role) => {
    if (filtros.categoria !== 'Todas' && role.categoria !== filtros.categoria) return false;
    if (filtros.regiao !== 'Todas as regiões' && role.regiao !== filtros.regiao) return false;
    if (filtros.preco === 'gratuito' && role.faixaPreco !== 'gratuito') return false;
    if (filtros.preco === 'ate50' && role.faixaPreco === 'acima50') return false;

    if (termo) {
      const texto = normalizar(`${role.nome} ${role.local} ${role.categoria}`);
      if (!texto.includes(termo)) return false;
    }

    return true;
  });
}