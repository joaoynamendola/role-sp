import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { cores, fontes, tamanhos } from '../constants/theme';

type Props = {
  titulo: string;
  onVoltar: () => void;
};

export function CabecalhoVoltar({ titulo, onVoltar }: Props) {
  return (
    <View style={styles.cabecalho}>
      <Pressable
        onPress={onVoltar}
        accessibilityRole="button"
        accessibilityLabel="Voltar"
        style={styles.voltar}
      >
        <Ionicons name="arrow-back" size={22} color={cores.texto} />
      </Pressable>
      <Text style={styles.titulo}>{titulo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cabecalho: { flexDirection: 'row', alignItems: 'center', marginTop: 4, marginLeft: -8 },
  voltar: { width: 44, height: 44, alignItems: 'center', justifyContent: 'center' },
  titulo: {
    fontFamily: fontes.semiBold,
    fontSize: tamanhos.secao,
    color: cores.texto,
    marginLeft: 4,
  },
});