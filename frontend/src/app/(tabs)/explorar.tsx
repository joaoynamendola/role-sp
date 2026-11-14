import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AtalhoCategoria } from '../../components/AtalhoCategoria';
import { CardRole } from '../../components/CardRole';
import { cores, fontes, tamanhos } from '../../constants/theme';
import { rolesDestaque } from '../../data/roles';

export default function Explorar() {
  const router = useRouter();

  function irParaBusca(categoria: string = 'Todas') {
    router.navigate({
      pathname: '/buscar',
      params: { categoria, regiao: 'Todas as regiões', preco: 'qualquer' },
    });
  }

  return (
    <SafeAreaView style={styles.tela} edges={['top']}>
      <ScrollView contentContainerStyle={styles.conteudo}>
        <View style={styles.topo}>
          <View
            style={styles.regiao}
            accessibilityLabel="Região selecionada: São Paulo"
          >
            <Ionicons name="location-outline" size={16} color={cores.texto} />
            <Text style={styles.regiaoTexto}>São Paulo</Text>
          </View>
        </View>

        <Text style={styles.titulo}>
          A cidade é sua.{'\n'}Qual é o próximo rolê?
        </Text>

        <Pressable
         onPress={() => irParaBusca()}
          accessibilityRole="search"
          accessibilityLabel="Buscar lugar, evento ou bairro"
          style={styles.busca}
        >
          <Ionicons name="search-outline" size={22} color={cores.textoSuave} />
          <Text style={styles.buscaTexto}>Lugar, evento ou bairro</Text>
        </Pressable>

        <View style={styles.categorias}>
          <AtalhoCategoria titulo="Comer" icone="restaurant-outline" onPress={() => irParaBusca()} />
          <AtalhoCategoria titulo="Cultura" icone="business-outline" onPress={() => irParaBusca()} />
          <AtalhoCategoria titulo="Shows" icone="musical-notes-outline" onPress={() => irParaBusca()} />
          <AtalhoCategoria titulo="Feiras" icone="bag-handle-outline" onPress={() => irParaBusca()} />
        </View>

        <View style={styles.secao}>
          <Text style={styles.secaoTitulo}>Descubra São Paulo</Text>
          <Pressable
           onPress={() => irParaBusca()}
            accessibilityRole="button"
            accessibilityLabel="Ver todos os rolês"
            style={styles.verTodos}
          >
            <Ionicons name="arrow-forward" size={22} color={cores.texto} />
          </Pressable>
        </View>

        {rolesDestaque.map((role) => (
          <CardRole key={role.id} role={role} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: { flex: 1, backgroundColor: cores.fundo },
  conteudo: { paddingHorizontal: 24, paddingBottom: 24 },
  topo: { alignItems: 'flex-end', marginTop: 8 },
  regiao: {
    minHeight: 44,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 16,
    backgroundColor: cores.superficie,
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: 22,
  },
  regiaoTexto: {
    fontFamily: fontes.semiBold,
    fontSize: tamanhos.corpo,
    color: cores.texto,
  },
  titulo: {
    fontFamily: fontes.bold,
    fontSize: tamanhos.titulo,
    lineHeight: 38,
    color: cores.texto,
    marginTop: 24,
  },
  busca: {
    minHeight: 52,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 16,
    marginTop: 20,
    backgroundColor: cores.superficie,
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: 12,
  },
  buscaTexto: {
    fontFamily: fontes.regular,
    fontSize: tamanhos.corpo,
    color: cores.textoSuave,
  },
  categorias: { flexDirection: 'row', gap: 6, marginTop: 20 },
  secao: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 28,
    marginBottom: 16,
  },
  secaoTitulo: {
    fontFamily: fontes.bold,
    fontSize: tamanhos.secao,
    color: cores.texto,
  },
  verTodos: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
});