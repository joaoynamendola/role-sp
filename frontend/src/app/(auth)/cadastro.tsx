import { useState } from 'react';
import {
    Alert,
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Botao } from '../../components/Botao';
import { CampoTexto } from '@/components/Campo';
import { cores, fontes, tamanhos } from '../../constants/theme';
import { emailValido } from '../../utils/validacao';

type Erros = { email?: string; nome?: string; senha?: string };

export default function Cadastro() {
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [erros, setErros] = useState<Erros>({});

    function cadastrar() {
        const novosErros: Erros = {};
        if (!emailValido(email)) novosErros.email = 'Digite um e-mail válido.';
        if (nome.trim().length < 2) novosErros.nome = 'Digite seu nome.';
        if (senha.length < 6) novosErros.senha = 'A senha deve ter pelo menos 6 caracteres.';
        setErros(novosErros);

        if (Object.keys(novosErros).length > 0) return;

        console.log('cadastro', 'Dados válidos. A conexão com a API vem algum dia, se eu fizer ela.');
    }

    return (
        <SafeAreaView style={styles.tela}>
            <KeyboardAvoidingView
                style={styles.tela}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
                <ScrollView
                    contentContainerStyle={styles.conteudo}
                    keyboardShouldPersistTaps="handled"
                >
                    <Image
                        source={require('../../../assets/images/logo.png')}
                        style={styles.logo}
                        resizeMode="contain"
                        accessibilityLabel="Logo Rolê Sampa"
                    />

                    <Text style={styles.titulo}>Cadastro</Text>

                    <CampoTexto
                        rotulo="E-mail"
                        placeholder="seu@email.com"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoComplete="email"
                        erro={erros.email}
                    />

                    <CampoTexto
                        rotulo="Nome"
                        placeholder="Digite seu nome"
                        value={nome}
                        onChangeText={setNome}
                        autoCapitalize="words"
                        autoComplete="name"
                        erro={erros.nome}
                    />

                    <CampoTexto
                        rotulo="Senha"
                        placeholder="••••••••"
                        value={senha}
                        onChangeText={setSenha}
                        senha
                        autoCapitalize="none"
                        erro={erros.senha}
                    />

                    <View style={styles.acao}>
                        <Botao titulo="Cadastro" onPress={cadastrar} />
                    </View>

                    <View style={styles.rodape}>
                        <Text style={styles.rodapeTexto}>Já tem conta? </Text>
                        <Link href="/login" style={styles.link}>
                            Entrar
                        </Link>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    tela: { flex: 1, backgroundColor: cores.fundo },
    conteudo: { padding: 24, paddingTop: 32 },
    logo: { width: 160, height: 160, alignSelf: 'center' },
    titulo: {
        fontFamily: fontes.bold,
        fontSize: tamanhos.secao,
        color: cores.texto,
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 32,
    },
    acao: { marginTop: 8 },
    rodape: { flexDirection: 'row', justifyContent: 'center', marginTop: 24 },
    rodapeTexto: {
        fontFamily: fontes.regular,
        fontSize: tamanhos.corpo,
        color: cores.textoSuave,
    },
    link: {
        fontFamily: fontes.semiBold,
        fontSize: tamanhos.corpo,
        color: cores.primaria,
    },
});