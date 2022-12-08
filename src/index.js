import React, {useState} from 'react';
import { ActivityIndicator, StyleSheet, View, SafeAreaView, StatusBar } from 'react-native';
import { HeaderComponent } from './components';
import { StartGameScreen, GameScreen, GameOverScreen } from './screens';
import colors from './utils/colors';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    'Lato-Regular': require('../assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('../assets/fonts/Lato-Bold.ttf'),
    'Lato-Italic': require('../assets/fonts/Lato-Italic.ttf'),
  })
  const [userNumber, setUserNumber] = useState(null);
  const [guessRounds, setGuessRounds] = useState(0);
  const onStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  const onGameOver = (rounds) => {
    setGuessRounds(rounds);
  }

  const onRestart = () => {
    setUserNumber(null);
    setGuessRounds(0);
  }

  let content =  <StartGameScreen onStartGame={onStartGame} />

  const getTitle = () => {
    let title;
    if(userNumber && guessRounds <= 0) {
      title = 'Adivina el número';
    } else if (guessRounds > 0) {
      title = 'Fin del juego';
    } else {
      title = '¿Preparado para jugar?';
    }
    return title;
  }

  if (userNumber && guessRounds <= 0) {
    content = <GameScreen selectedNumber={userNumber} onGameOver={onGameOver} />
  } else if (guessRounds > 0) {
    content = <GameOverScreen rounds={guessRounds} selectedNumber={userNumber} onRestart={onRestart} />
  }

  // if (!loaded) {
  //   return (
  //   <View style={styles.containerLoader}>
  //     <ActivityIndicator size='large' color={colors.primary} />
  //   </View>
  //   )
  // }

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent title={getTitle()}/>
      {content}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  containerLoader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  }
});
