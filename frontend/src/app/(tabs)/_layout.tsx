import { ComponentProps } from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { cores, fontes, tamanhos } from '../../constants/theme';

type NomeIcone = ComponentProps<typeof Ionicons>['name'];

function icone(nome: NomeIcone) {
  return function IconeAba({ focused }: { focused: boolean }) {
    return (
      <Ionicons
        name={nome}
        size={20}
        color={focused ? cores.branco : cores.texto}
      />
    );
  };
}

export default function AbasLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: cores.branco,
        tabBarInactiveTintColor: cores.texto,
        tabBarActiveBackgroundColor: cores.alerta,
        tabBarLabelStyle: { fontFamily: fontes.semiBold, fontSize: tamanhos.apoio },
        tabBarItemStyle: { borderRadius: 12, marginHorizontal: 8, marginVertical: 8 },
        tabBarStyle: {
          backgroundColor: cores.fundo,
          borderTopColor: cores.borda,
          height: 74 + insets.bottom,
          paddingHorizontal: 16,
        },
      }}
    >
      <Tabs.Screen
        name="explorar"
        options={{ title: 'Explorar', tabBarIcon: icone('compass-outline') }}
      />
      <Tabs.Screen
        name="buscar"
        options={{ title: 'Buscar', tabBarIcon: icone('search-outline') }}
      />
      <Tabs.Screen
        name="comparar"
        options={{ title: 'Comparar', tabBarIcon: icone('swap-vertical-outline') }}
      />
    </Tabs>
  );
}