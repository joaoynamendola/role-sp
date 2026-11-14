import { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Botao } from '../../components/Botao';
import { CardResultado } from '../../components/CardResultado';
import { ChipFiltro } from '../../components/ChipFiltro';
import { cores, fontes, tamanhos } from '../../constants/theme';
import { CATEGORIAS, PRECOS, REGIOES } from '../../constants/filtros';
import { roles } from '../../data/roles';
import { filtrarRoles } from '../../utils/filtrarRoles';
import { lerParametro } from '../../utils/parametros';

const VALORES_PRECO = PRECOS.map((item) => item.valor);

export default function Buscar() {
  const router = useRouter();
  const params = useLocalSearchParams<{ categoria?: string; regiao?: string; preco?: string }>();
  const [consulta, setConsulta] = useState('');

  const categoria = lerParametro(params.categoria, CATEGORIAS, 'Todas');
  const regiao = lerParametro(params.regiao, REGIOES, 'Todas as regiões');
  const preco = lerParametro(params.preco, VALORES_PRECO, 'qualquer');

  const resultados = useMemo(
    () => filtrarRoles(roles, { categoria, regiao, preco, consulta }),
    [categoria, regiao, preco, consulta]
  );

  const rotuloPreco = PRECOS.find((item) => item.valor === preco)?.rotulo ?? 'Preço';

  function abrirFiltros() {
    router.push({ pathname: '/filtros', params: { categoria, regiao, preco } });
  }

  function montarTitulo(): string {
    if (preco === 'ate50') return 'Rolês até R$ 50';
    if (preco === 'gratuito') return 'Rolês gratuitos';
    if (categoria !== 'Todas') return categoria;
    return 'Todos os rolês';
  }

  const quantidade = resultados.length;
  const textoQuantidade = `${quantidade} ${quantidade === 1 ? 'opção' : 'opções'} · São Paulo`;

  return (
    <SafeAreaView style={styles.tela} edges={['top']}>
      <ScrollView
        contentContainerStyle={styles.conteudo}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.cabecalho}>
          <Pressable
            onPress={() => router.navigate('/explorar')}
            accessibilityRole="button"
            accessibilityLabel="Voltar para Explorar"
            style={styles.voltar}
          >
            <Ionicons name="arrow-back" size={22} color={cores.texto} />
          </Pressable>
          <Text style={styles.cabecalhoTitulo}>Encontre seu rolê</Text>
        </View>

        <View style={styles.busca}>
          <Ionicons name="search-outline" size={22} color={cores.textoSuave} />
          <TextInput
            style={styles.buscaInput}
            placeholder="Lugar, evento ou bairro"
            placeholderTextColor={cores.textoSuave}
            value={consulta}
            onChangeText={setConsulta}
            returnKeyType="search"
            accessibilityLabel="Buscar lugar, evento ou bairro"
          />
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.chips}
        >
          <ChipFiltro
            rotulo={categoria === 'Todas' ? 'Categorias' : categoria}
            ativo={categoria !== 'Todas'}
            onPress={abrirFiltros}
          />
          <ChipFiltro
            rotulo={regiao === 'Todas as regiões' ? 'Região' : regiao}
            ativo={regiao !== 'Todas as regiões'}
            onPress={abrirFiltros}
          />
          <ChipFiltro
            rotulo={preco === 'qualquer' ? 'Preço' : rotuloPreco}
            ativo={preco !== 'qualquer'}
            onPress={abrirFiltros}
          />
        </ScrollView>

        <View style={styles.tituloLinha}>
          <View style={styles.tituloTextos}>
            <Text style={styles.titulo}>{montarTitulo()}</Text>
            <Text style={styles.quantidade}>{textoQuantidade}</Text>
          </View>
          <Pressable
            onPress={abrirFiltros}
            accessibilityRole="button"
            accessibilityLabel="Abrir filtros"
            style={styles.botaoFiltro}
          >
            <Ionicons name="options-outline" size={22} color={cores.texto} />
          </Pressable>
        </View>

        {quantidade > 0 ? (
          <>
            {resultados.map((role) => (
              <CardResultado key={role.id} role={role} />
            ))}

            <Text style={styles.decidir}>Quer decidir com calma?</Text>
           / <Botao titulo="Comparar opções" onPress={() => router.navigate('/comparar')} />
          </>
        ) : (
          <View style={styles.vazio}>
            <View style={styles.vazioIcone}>
              <Ionicons name="search-outline" size={26} color={cores.primaria} />
            </View>
            <Text style={styles.vazioTitulo}>Ainda não achamos esse rolê.</Text>
            <Text style={styles.vazioTexto}>
              Experimente outra região ou ajuste a faixa de preço.
            </Text>
            <Botao titulo="Ajustar filtros" onPress={abrirFiltros} />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: { flex: 1, backgroundColor: cores.fundo },
  conteudo: { paddingHorizontal: 24, paddingBottom: 24 },
  cabecalho: { flexDirection: 'row', alignItems: 'center', marginTop: 4, marginLeft: -8 },
  voltar: { width: 44, height: 44, alignItems: 'center', justifyContent: 'center' },
  cabecalhoTitulo: {
    fontFamily: fontes.semiBold,
    fontSize: tamanhos.secao,
    color: cores.texto,
    marginLeft: 4,
  },
  busca: {
    minHeight: 52,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 16,
    marginTop: 12,
    backgroundColor: cores.superficie,
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: 12,
  },
  buscaInput: {
    flex: 1,
    fontFamily: fontes.regular,
    fontSize: tamanhos.corpo,
    color: cores.texto,
  },
  chips: { gap: 8, paddingVertical: 16 },
  tituloLinha: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
    marginBottom: 16,
  },
  tituloTextos: { flex: 1 },
  titulo: {
    fontFamily: fontes.bold,
    fontSize: tamanhos.secao,
    color: cores.texto,
  },
  quantidade: {
    fontFamily: fontes.regular,
    fontSize: tamanhos.corpo,
    color: cores.textoSuave,
    marginTop: 2,
  },
  botaoFiltro: { width: 44, height: 44, alignItems: 'center', justifyContent: 'center' },
  decidir: {
    fontFamily: fontes.semiBold,
    fontSize: tamanhos.corpo,
    color: cores.texto,
    marginTop: 8,
    marginBottom: 12,
  },
  vazio: { marginTop: 24 },
  vazioIcone: {
    width: 66,
    height: 66,
    borderRadius: 33,
    backgroundColor: cores.primariaClara,
    alignItems: 'center',
    justifyContent: 'center',
  },
  vazioTitulo: {
    fontFamily: fontes.bold,
    fontSize: tamanhos.titulo,
    lineHeight: 38,
    color: cores.texto,
    marginTop: 24,
  },
  vazioTexto: {
    fontFamily: fontes.regular,
    fontSize: tamanhos.corpo,
    color: cores.textoSuave,
    marginTop: 8,
    marginBottom: 24,
  },
});