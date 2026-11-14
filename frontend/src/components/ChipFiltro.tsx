import { Pressable, StyleSheet, Text } from 'react-native';
import { cores, fontes, tamanhos } from '../constants/theme';

type Props = {
  rotulo: string;
  ativo?: boolean;
  onPress: () => void;
};

export function ChipFiltro({ rotulo, ativo = false, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityState={{ selected: ativo }}
      accessibilityLabel={`Filtro ${rotulo}`}
      style={[styles.chip, ativo && styles.chipAtivo]}
    >
      <Text style={[styles.texto, ativo && styles.textoAtivo]} numberOfLines={1}>
        {rotulo}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    minHeight: 40,
    justifyContent: 'center',
    paddingHorizontal: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: cores.borda,
    backgroundColor: cores.fundo,
  },
  chipAtivo: {
    backgroundColor: cores.primariaClara,
    borderColor: cores.primaria,
  },
  texto: {
    fontFamily: fontes.semiBold,
    fontSize: tamanhos.corpo,
    color: cores.texto,
  },
  textoAtivo: { color: cores.primariaEscura },
});