import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { cores, fontes, raio, tamanhos } from '../constants/theme';

type Props = TextInputProps & {
  rotulo: string;
  erro?: string;
  senha?: boolean;
};

export function CampoTexto({ rotulo, erro, senha = false, ...resto }: Props) {
  const [oculta, setOculta] = useState(senha);

  return (
    <View style={styles.container}>
      <Text style={styles.rotulo}>{rotulo}</Text>

      <View style={[styles.caixa, erro ? styles.caixaErro : null]}>
        <TextInput
          style={styles.input}
          placeholderTextColor={cores.textoSuave}
          secureTextEntry={oculta}
          accessibilityLabel={rotulo}
          {...resto}
        />
        {senha && (
          <Pressable
            onPress={() => setOculta((valor) => !valor)}
            hitSlop={12}
            accessibilityRole="button"
            accessibilityLabel={oculta ? 'Mostrar senha' : 'Ocultar senha'}
          >
            <Ionicons
              name={oculta ? 'eye-outline' : 'eye-off-outline'}
              size={20}
              color={cores.textoSuave}
            />
          </Pressable>
        )}
      </View>

      {erro ? <Text style={styles.erro}>{erro}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 16 },
  rotulo: {
    fontFamily: fontes.semiBold,
    fontSize: tamanhos.corpo,
    color: cores.texto,
    marginBottom: 6,
  },
  caixa: {
    minHeight: 52,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: cores.superficie,
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: raio.campo,
    paddingHorizontal: 16,
  },
  caixaErro: { borderColor: cores.alerta },
  input: {
    flex: 1,
    fontFamily: fontes.regular,
    fontSize: tamanhos.corpo,
    color: cores.texto,
  },
  erro: {
    fontFamily: fontes.regular,
    fontSize: tamanhos.apoio,
    color: cores.alerta,
    marginTop: 4,
  },
});