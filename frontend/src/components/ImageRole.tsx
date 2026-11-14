import { DimensionValue, Image, ImageSourcePropType, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { cores } from '../constants/theme';

type Props = {
  imagem?: ImageSourcePropType;
  largura: DimensionValue;
  altura: number;
  raio: number;
};

export function ImagemRole({ imagem, largura, altura, raio }: Props) {
  const medidas = { width: largura, height: altura, borderRadius: raio };

  if (imagem) {
    return <Image source={imagem} style={medidas} resizeMode="cover" />;
  }

  return (
    <View style={[medidas, styles.provisoria]} accessible={false}>
      <Ionicons name="image-outline" size={32} color={cores.primaria} />
    </View>
  );
}

const styles = StyleSheet.create({
  provisoria: {
    backgroundColor: cores.primariaClara,
    alignItems: 'center',
    justifyContent: 'center',
  },
});