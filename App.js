import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, StatusBar, ScrollView } from 'react-native';
import { evaluate, sin, cos, tan, log, sqrt, pi } from 'mathjs'; // Importamos las funciones necesarias de mathjs

export default function App() {
  const [input, setInput] = useState(''); // Estado para manejar el input
  const [result, setResult] = useState(''); // Estado para manejar el resultado

  // Función para manejar la entrada
  const handlePress = (value) => {
    setInput((prevInput) => prevInput + value); // Actualiza el input concatenando valores
  };

  // Conversión de grados a radianes para trigonometría
  const toRadians = (degrees) => (degrees * Math.PI) / 180;

  // Función para calcular el resultado
  const calculateResult = () => {
    try {
      let modifiedInput = input;

      // Detectamos las funciones trigonométricas y convertimos a radianes antes de evaluarlas
      modifiedInput = modifiedInput
        .replace(/sin\(([^)]+)\)/g, (match, p1) => `sin(${toRadians(parseFloat(p1))})`)
        .replace(/cos\(([^)]+)\)/g, (match, p1) => `cos(${toRadians(parseFloat(p1))})`)
        .replace(/tan\(([^)]+)\)/g, (match, p1) => `tan(${toRadians(parseFloat(p1))})`);

      // Luego evaluamos la expresión modificada
      const evaluated = evaluate(modifiedInput);

      setResult(evaluated.toString()); // Muestra el resultado en la pantalla
    } catch (error) {
      setResult('Error');
    }
  };

  // Función para limpiar el input y resultado
  const clearInput = () => {
    setInput('');
    setResult('');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light-content" />
      
      {/* Mostrar la entrada y el resultado */}
      <View style={styles.displayContainer}>
        <TextInput 
          style={styles.input} 
          placeholder="0" 
          placeholderTextColor="#999" 
          value={input} 
          editable={false}
        />
        <Text style={styles.result}>{result}</Text>
      </View>

      {/* Botones de la calculadora */}
      <ScrollView contentContainerStyle={styles.buttonsContainer}>
        {/* Fila 1: Funciones científicas */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('sin(')}>
            <Text style={styles.buttonText} adjustsFontSizeToFit numberOfLines={1}>sin</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('cos(')}>
            <Text style={styles.buttonText} adjustsFontSizeToFit numberOfLines={1}>cos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('tan(')}>
            <Text style={styles.buttonText} adjustsFontSizeToFit numberOfLines={1}>tan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('log(')}>
            <Text style={styles.buttonText} adjustsFontSizeToFit numberOfLines={1}>log</Text>
          </TouchableOpacity>
        </View>

        {/* Fila 2: Operaciones adicionales */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('^')}>
            <Text style={styles.buttonText} adjustsFontSizeToFit numberOfLines={1}>^</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('sqrt(')}>
            <Text style={styles.buttonText} adjustsFontSizeToFit numberOfLines={1}>√</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('(')}>
            <Text style={styles.buttonText} adjustsFontSizeToFit numberOfLines={1}>(</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress(')')}>
            <Text style={styles.buttonText} adjustsFontSizeToFit numberOfLines={1}>)</Text>
          </TouchableOpacity>
        </View>

        {/* Fila 3 */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('7')}>
            <Text style={styles.buttonText} adjustsFontSizeToFit numberOfLines={1}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('8')}>
            <Text style={styles.buttonText} adjustsFontSizeToFit numberOfLines={1}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('9')}>
            <Text style={styles.buttonText} adjustsFontSizeToFit numberOfLines={1}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('/')}>
            <Text style={styles.buttonText} adjustsFontSizeToFit numberOfLines={1}>/</Text>
          </TouchableOpacity>
        </View>

        {/* Fila 4 */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('4')}>
            <Text style={styles.buttonText} adjustsFontSizeToFit numberOfLines={1}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('5')}>
            <Text style={styles.buttonText} adjustsFontSizeToFit numberOfLines={1}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('6')}>
            <Text style={styles.buttonText} adjustsFontSizeToFit numberOfLines={1}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('*')}>
            <Text style={styles.buttonText} adjustsFontSizeToFit numberOfLines={1}>*</Text>
          </TouchableOpacity>
        </View>

        {/* Fila 5 */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('1')}>
            <Text style={styles.buttonText} adjustsFontSizeToFit numberOfLines={1}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('2')}>
            <Text style={styles.buttonText} adjustsFontSizeToFit numberOfLines={1}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('3')}>
            <Text style={styles.buttonText} adjustsFontSizeToFit numberOfLines={1}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('-')}>
            <Text style={styles.buttonText} adjustsFontSizeToFit numberOfLines={1}>-</Text>
          </TouchableOpacity>
        </View>

        {/* Fila 6 */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.buttonZero} onPress={() => handlePress('0')}>
            <Text style={styles.buttonText} adjustsFontSizeToFit numberOfLines={1}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('.')}>
            <Text style={styles.buttonText} adjustsFontSizeToFit numberOfLines={1}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('+')}>
            <Text style={styles.buttonText} adjustsFontSizeToFit numberOfLines={1}>+</Text>
          </TouchableOpacity>
        </View>

        {/* Fila 7 */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.buttonClear} onPress={clearInput}>
            <Text style={styles.buttonText} adjustsFontSizeToFit numberOfLines={1}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonEqual} onPress={calculateResult}>
            <Text style={styles.buttonText} adjustsFontSizeToFit numberOfLines={1}>=</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

// Estilos para la calculadora científica
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    justifyContent: 'center',
  },
  displayContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 20,
  },
  input: {
    fontSize: 40,
    color: '#fff',
    width: '100%',
    textAlign: 'right',
    borderBottomWidth: 1,
    borderBottomColor: '#555',
  },
  result: {
    fontSize: 30,
    color: '#76ff03',
    marginTop: 10,
  },
  buttonsContainer: {
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    flexWrap: 'wrap', // Ajuste para que los botones se envuelvan en pantallas pequeñas
  },
  button: {
    backgroundColor: '#333',
    padding: 20,
    width: '22%', // Ajustamos el ancho de los botones
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonZero: {
    backgroundColor: '#333',
    padding: 20,
    width: '47%',
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonClear: {
    backgroundColor: '#f44336',
    padding: 20,
    width: '22%',
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonEqual: {
    backgroundColor: '#4caf50',
    padding: 20,
    width: '47%',
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 30,
    color: '#fff',
    adjustsFontSizeToFit: true, // Ajusta el tamaño del texto para pantallas pequeñas
  },
});
