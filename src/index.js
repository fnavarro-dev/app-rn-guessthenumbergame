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
  
  const onStartGame = (selectedNumber) => { //al empezar selecciono un numero
    setUserNumber(selectedNumber);
  }

  const onGameOver = (rounds) => { //setea numero de rondas
    setGuessRounds(rounds);
  }

  const onRestart = () => {
    setUserNumber(null); //resetea numero escrito
    setGuessRounds(0); //resetea las rondas a cero
  }

  let content =  <StartGameScreen onStartGame={onStartGame} />

  //ELIGE TÍTULO DEL HEADER

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

  //AQUI SE HACE CAMBIO DE PANTALLA

  if (userNumber && guessRounds <= 0) {
    content = <GameScreen selectedNumber={userNumber} onGameOver={onGameOver} /> //onGameOver se ejecuta al adivinar el numero --> linea 21 setea rondas y al ser > 0 entra en el else if de abajo
  } else if (guessRounds > 0) { // en 1 ronda o mas rondas se adivina el numero
    content = <GameOverScreen rounds={guessRounds} selectedNumber={userNumber} onRestart={onRestart} /> //aqui pasa 3 parametros a la otra pantalla
  }

  // -----------------------

  if (!loaded) {
    return (
    <View style={styles.containerLoader}>
      <ActivityIndicator size='large' color={colors.primary} />
    </View>
    )
  }

  //SafeAreaView ve desde el notch hacia abajo, omite el notch
  //SafeAreaView es más util para iOS y pocos Android como motorola
  //StatusBar.currentHeight tiene propiedades y se puede ocupar en estilos
  //get Title SETEA EL TITULO DEL HEADER


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
