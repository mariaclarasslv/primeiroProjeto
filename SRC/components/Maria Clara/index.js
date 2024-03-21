import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Maria Clara de Sousa Silva</Text>
      <Text>Primeira Prova DDm lado B</Text>
      
   
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
