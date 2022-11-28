import { StyleSheet, Text, View } from 'react-native';
import { HeaderComponent } from './components';
import { StartGameScreen } from './screens';

export default function App() {
  return (
    <View style={styles.container}>
      <HeaderComponent  title='Welcome'/>
      <StartGameScreen /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
   
  },
});
