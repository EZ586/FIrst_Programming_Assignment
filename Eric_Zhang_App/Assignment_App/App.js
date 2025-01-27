import { StyleSheet, View } from 'react-native';
import DataDisplay from './src/data_display.js';

export default function App() {
  console.log("App execututed")
  return (
    <View style={styles.container}>
      <DataDisplay />
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
