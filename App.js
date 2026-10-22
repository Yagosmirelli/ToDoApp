import react from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Minhas Tarefas</Text>
      <View style={styles.vermelho}></View>
      <View style={styles.verde}></View>
      <View style={styles.azul}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  vermelho: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  verde: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
  },
  azul: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
});