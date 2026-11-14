import { ImageSourcePropType } from 'react-native';
import { Categoria, Regiao } from '../constants/filtros';

export type Role = {
  id: string;
  nome: string;
  categoria: Exclude<Categoria, 'Todas'>;
  regiao: Exclude<Regiao, 'Todas as regiões'>;
  local: string;
  nota: number;
  preco: string;
  faixaPreco: 'gratuito' | 'ate50' | 'acima50';
  observacao: string;
  imagem?: ImageSourcePropType;
};

// Dados de exemplo, depois nois troca pelo bagulhos que vier da api
export const roles: Role[] = [
  {
    id: 'parque-ibirapuera',
    nome: 'Parque Ibirapuera',
    categoria: 'Ao ar livre',
    regiao: 'Zona Sul',
    local: 'Vila Mariana · Zona Sul',
    nota: 4.8,
    preco: 'Entrada gratuita',
    faixaPreco: 'gratuito',
    observacao: 'Avaliações de visitas em outubro',
    imagem: require('../../assets/images/parque-ibirapuera.jpg'),
  },
  {
    id: 'feira-liberdade',
    nome: 'Feira da Liberdade',
    categoria: 'Feiras',
    regiao: 'Centro',
    local: 'Liberdade · Centro',
    nota: 4.6,
    preco: 'Consumo de R$ 20–50',
    faixaPreco: 'ate50',
    observacao: 'Avaliações de visitas em outubro',
    imagem: require('../../assets/images/feira-liberdade.png'),
  },
  {
    id: 'bistro-horizonte',
    nome: 'Bistrô Horizonte',
    categoria: 'Comer',
    regiao: 'Zona Oeste',
    local: 'Pinheiros · Zona Oeste',
    nota: 4.5,
    preco: 'Consumo de R$ 35–50',
    faixaPreco: 'ate50',
    observacao: 'Avaliações de visitas em outubro',
  },
  {
    id: 'pinacoteca',
    nome: 'Pinacoteca de São Paulo',
    categoria: 'Cultura',
    regiao: 'Centro',
    local: 'Luz · Centro',
    nota: 4.7,
    preco: 'Ingresso até R$ 50',
    faixaPreco: 'ate50',
    observacao: 'Avaliações de visitas em outubro',
  },
  {
    id: 'parque-agua-branca',
    nome: 'Parque da Água Branca',
    categoria: 'Ao ar livre',
    regiao: 'Zona Oeste',
    local: 'Perdizes · Zona Oeste',
    nota: 4.4,
    preco: 'Entrada gratuita',
    faixaPreco: 'gratuito',
    observacao: 'Avaliações de visitas em outubro',
  },
  {
    id: 'palco-aberto',
    nome: 'Palco Aberto da Vila',
    categoria: 'Shows',
    regiao: 'Zona Oeste',
    local: 'Vila Madalena · Zona Oeste',
    nota: 4.3,
    preco: 'Ingresso de R$ 60–90',
    faixaPreco: 'acima50',
    observacao: 'Avaliações de visitas em outubro',
  },
];

export const rolesDestaque = roles.slice(0, 2);