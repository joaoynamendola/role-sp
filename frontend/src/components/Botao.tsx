import { ActivityIndicator, Pressable, StyleSheet, Text } from 'react-native';
import { cores, fontes, raio, tamanhos } from '../constants/theme';

type Props = {
  titulo: string;
  onPress: () => void;
  carregando?: boolean;
};

export function Botao({ titulo, onPress, carregando = false }: Props) {
  return (
    <Pressable
      onPress={onPress}
      disabled={carregando}
      accessibilityRole="button"
      accessibilityLabel={titulo}
      style={({ pressed }) => [styles.botao, pressed && styles.pressionado]}
    >
      {carregando ? (
        <ActivityIndicator color={cores.textoBotao} />
      ) : (
        <Text style={styles.texto}>{titulo}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  botao: {
    minHeight: 48,
    borderRadius: raio.botao,
    backgroundColor: cores.destaque,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  pressionado: { opacity: 0.85 },
  texto: {
    fontFamily: fontes.semiBold,
    fontSize: tamanhos.corpo + 2,
    color: cores.textoBotao,
  },
});