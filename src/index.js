import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderComponent } from './components';
import { StartGameScreen, GameScreen } from './screens';
import colors from './utils/colors';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const onStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  let content = <StartGameScreen onStartGame={onStartGame}/> 
  if (userNumber) {
    content = <GameScreen selectedNumber={userNumber} />
  }

  return (
    <View style={styles.container}>
      <HeaderComponent  title='Adivina tu número'/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
   
  },
});
