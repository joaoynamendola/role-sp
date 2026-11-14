import { StyleSheet, Text, View } from 'react-native';
import { cores, fontes, tamanhos } from '../../constants/theme';

export default function Comparar() {
  return (
    <View style={styles.tela}>
      <Text style={styles.texto}>Comparar (em construção)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: cores.fundo },
  texto: { fontFamily: fontes.regular, fontSize: tamanhos.corpo, color: cores.textoSuave },
});