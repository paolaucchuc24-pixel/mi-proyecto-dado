import { useState } from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

// Platform.select elige un valor segun el sistema operativo donde corre la app.
const plataforma = Platform.select({ ios: 'iOS', android: 'Android', default: 'Web' });

export default function App() {
  const [saludos, setSaludos] = useState(0);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />

        <View style={styles.card}>
          <Text style={styles.emoji}>👋</Text>
          <Text style={styles.titulo}>¡Hola, Mundo!</Text>
          <Text style={styles.subtitulo}>
            Mi primera app con React Native y Expo
          </Text>
          <Text style={styles.plataforma}>
            Ejecutándose en {plataforma}
          </Text>

          <Pressable
            style={({ pressed }) => [styles.boton, pressed && styles.botonPresionado]}
            onPress={() => setSaludos(saludos + 1)}
          >
            <Text style={styles.textoBoton}>Saludar</Text>
          </Pressable>

          <Text style={styles.contador}>
            {saludos === 0
              ? 'Todavía no saludas a nadie'
              : `Has saludado ${saludos} ${saludos === 1 ? 'vez' : 'veces'}`}
          </Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1220',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  card: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: '#151F33',
    borderRadius: 24,
    paddingVertical: 40,
    paddingHorizontal: 24,
    alignItems: 'center',
    gap: 12,
  },
  emoji: {
    fontSize: 56,
  },
  titulo: {
    fontSize: 32,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  subtitulo: {
    fontSize: 16,
    color: '#9AA6BF',
    textAlign: 'center',
  },
  plataforma: {
    fontSize: 13,
    color: '#4F8DFD',
    fontWeight: '600',
  },
  boton: {
    marginTop: 16,
    backgroundColor: '#4F8DFD',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 999,
  },
  botonPresionado: {
    backgroundColor: '#3C6FD1',
    transform: [{ scale: 0.97 }],
  },
  textoBoton: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  contador: {
    marginTop: 4,
    fontSize: 14,
    color: '#9AA6BF',
  },
});
