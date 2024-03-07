import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from './src/components/';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Maria Clara de Sousa Silva</Text>
      <Text>Desenvolvimento de Dispositivos Móveis</Text>
      <Title/>
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
