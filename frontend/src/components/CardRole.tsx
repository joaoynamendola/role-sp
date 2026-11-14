import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { cores, fontes, tamanhos } from '../constants/theme';
import { Role } from '../data/roles';
import { formatarNota } from '../utils/formatacao';
import { ImagemRole } from './ImageRole';

type Props = {
    role: Role;
    onPress?: () => void;
};

export function CardRole({ role, onPress }: Props) {
    return (
        <Pressable
            onPress={onPress}
            accessibilityRole="button"
            accessibilityLabel={`${role.nome}, nota ${formatarNota(role.nota)}, ${role.local}, ${role.preco}`}
            style={styles.card}
        >
            <View>
                <ImagemRole imagem={role.imagem} largura="100%" altura={168} raio={16} />
                <View style={styles.selo}>
                    <Text style={styles.seloTexto}>{role.categoria}</Text>
                </View>
            </View>

            <View style={styles.titulo}>
                <Text style={styles.nome} numberOfLines={1}>
                    {role.nome}
                </Text>
                <View style={styles.nota}>
                    <Ionicons name="star-outline" size={16} color={cores.texto} />
                    <Text style={styles.notaTexto}>{formatarNota(role.nota)}</Text>
                </View>
            </View>

            <Text style={styles.local}>{role.local}</Text>
            <Text style={styles.preco}>{role.preco}</Text>
            <Text style={styles.observacao}>{role.observacao}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: { marginBottom: 24 },
    imagem: { width: '100%', height: 168, borderRadius: 16 },
    selo: {
        position: 'absolute',
        top: 12,
        left: 12,
        backgroundColor: cores.branco,
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 4,
    },
    seloTexto: {
        fontFamily: fontes.semiBold,
        fontSize: tamanhos.apoio,
        color: cores.texto,
    },
    titulo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 12,
    },
    nome: {
        flex: 1,
        fontFamily: fontes.bold,
        fontSize: tamanhos.secao,
        color: cores.texto,
    },
    nota: { flexDirection: 'row', alignItems: 'center', gap: 4, marginLeft: 12 },
    notaTexto: {
        fontFamily: fontes.semiBold,
        fontSize: tamanhos.corpo,
        color: cores.texto,
    },
    local: {
        fontFamily: fontes.regular,
        fontSize: tamanhos.corpo,
        color: cores.textoSuave,
        marginTop: 4,
    },
    preco: {
        fontFamily: fontes.semiBold,
        fontSize: tamanhos.corpo,
        color: cores.preco,
        marginTop: 8,
    },
    observacao: {
        fontFamily: fontes.regular,
        fontSize: tamanhos.apoio,
        color: cores.textoSuave,
        marginTop: 4,
    },
});