// tela provisoria

import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { cores, fontes, tamanhos } from '../constants/theme';

export default function Filtros() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.tela}>
      <View style={styles.centro}>
        <Text style={styles.texto}>Filtros (em construção)</Text>
        <Pressable onPress={() => router.back()} accessibilityRole="button">
          <Text style={styles.link}>Voltar</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: { flex: 1, backgroundColor: cores.fundo },
  centro: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 16 },
  texto: { fontFamily: fontes.regular, fontSize: tamanhos.corpo, color: cores.textoSuave },
  link: { fontFamily: fontes.semiBold, fontSize: tamanhos.corpo, color: cores.primaria },
});