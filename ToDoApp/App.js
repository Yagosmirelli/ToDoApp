import react from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity  } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}> 

    <View style={styles.cores}>
      <View style={styles.vermelho}></View>
      <View style={styles.verde}></View>
      <View style={styles.azul}></View>
    </View>
    <View style={styles.containerow}>

        <TextInput
          placeholder="Digite a anotação..."
          style={styles.input}
        />
        <TouchableOpacity style={styles.Opacity}
        onPress={() => {
          console.log('Botão pressionado');
        }}
      >
        <Text>+</Text>
      </TouchableOpacity>
    
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  input: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  Opacity: {
    width: 50,
    height: 50,
    backgroundColor: '#ff1111',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    flexDirection: 'row',
    marginLeft: 10,
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
  containerow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 300,
    marginBottom: 10,
  },
  cores:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 300,
    marginBottom: 10,
    textAlign: 'center',

  },
  vermelho: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
  verde: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
  },
  azul: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
  }
}); 