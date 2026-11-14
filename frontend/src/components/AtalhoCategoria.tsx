import { Pressable, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { cores, fontes, tamanhos } from '../constants/theme';

type Props = {
  titulo: string;
  icone: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
};

export function AtalhoCategoria({ titulo, icone, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`Categoria ${titulo}`}
      style={styles.atalho}
    >
      <Ionicons name={icone} size={24} color={cores.primaria} />
      <Text style={styles.texto}>{titulo}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  atalho: {
    flex: 1,
    minHeight: 76,
    backgroundColor: cores.superficie,
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  texto: {
    fontFamily: fontes.semiBold,
    fontSize: tamanhos.apoio,
    color: cores.texto,
  },
});