import { useState } from 'react';
import {
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const plataforma = Platform.select({
  ios: 'iOS',
  android: 'Android',
  default: 'Web',
});

// Caras de un dado tradicional
const carasDado = {
  1: '⚀',
  2: '⚁',
  3: '⚂',
  4: '⚃',
  5: '⚄',
  6: '⚅',
};

export default function App() {
  const [resultado, setResultado] = useState(null);
  const [lanzamientos, setLanzamientos] = useState(0);

  const lanzarDado = () => {
    const numero = Math.floor(Math.random() * 6) + 1;
    setResultado(numero);
    setLanzamientos((anterior) => anterior + 1);
  };

  const reiniciar = () => {
    setResultado(null);
    setLanzamientos(0);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />

        <View style={styles.card}>
          <Text style={styles.emoji}>🎲</Text>

          <Text style={styles.titulo}>Lanza el dado</Text>

          <Text style={styles.subtitulo}>
            Presiona el botón para obtener un número del 1 al 6.
          </Text>

          <View style={styles.dado}>
            <Text style={styles.cara}>
              {resultado === null ? '🎲' : carasDado[resultado]}
            </Text>
          </View>

          <Text style={styles.resultado}>
            {resultado === null
              ? '¡Listo para jugar!'
              : `Resultado: ${resultado}`}
          </Text>

          <Pressable
            style={({ pressed }) => [
              styles.boton,
              pressed && styles.botonPresionado,
            ]}
            onPress={lanzarDado}
          >
            <Text style={styles.textoBoton}>🎲 Lanzar dado</Text>
          </Pressable>

          <Text style={styles.contador}>
            Lanzamientos realizados: {lanzamientos}
          </Text>

          <Pressable
            style={({ pressed }) => [
              styles.botonReiniciar,
              pressed && styles.botonPresionado,
            ]}
            onPress={reiniciar}
          >
            <Text style={styles.textoReiniciar}>Reiniciar</Text>
          </Pressable>

          <Text style={styles.plataforma}>
            Ejecutándose en {plataforma}
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
    paddingVertical: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
    gap: 14,
  },

  emoji: {
    fontSize: 42,
  },

  titulo: {
    fontSize: 30,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
  },

  subtitulo: {
    fontSize: 15,
    color: '#9AA6BF',
    textAlign: 'center',
    lineHeight: 22,
  },

  dado: {
    width: 150,
    height: 150,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    marginBottom: 4,
  },

  cara: {
    fontSize: 100,
    color: '#151F33',
    textAlign: 'center',
  },

  resultado: {
    fontSize: 22,
    fontWeight: '700',
    color: '#FFFFFF',
    marginVertical: 4,
  },

  boton: {
    width: '100%',
    backgroundColor: '#4F8DFD',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 8,
  },

  botonPresionado: {
    opacity: 0.8,
    transform: [{ scale: 0.97 }],
  },

  textoBoton: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },

  contador: {
    fontSize: 14,
    color: '#9AA6BF',
    textAlign: 'center',
    marginTop: 8,
  },

  botonReiniciar: {
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 12,
    backgroundColor: '#26344D',
  },

  textoReiniciar: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },

  plataforma: {
    fontSize: 12,
    color: '#4F8DFD',
    fontWeight: '600',
    marginTop: 6,
  },
});