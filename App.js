import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
 
const App = () => {
  const [count, setCount] = useState(0);



  const increment = () => {
    setCount(count + 1);
  };
 
  const decrement = () => {
   if (count > 0)
    setCount(count - 1);
  };
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador Simples</Text>
      <Text style={styles.counter}>{count}</Text>
     
      <View style={styles.buttonsContainer}>
        <View style={styles.button}>
          <Button title="+" onPress={increment} color="#4CAF50" />
        </View>
        <View style={styles.button}>
          <Button title="-" onPress={decrement} color="#F44336" disabled={count === 0} />
        </View>
      </View>
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  counter: {
    fontSize: 48,
    fontWeight: 'bold',
    marginVertical: 30,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '70%',
  },
  button: {
    width: '40%',
  },
});
 
export default App;