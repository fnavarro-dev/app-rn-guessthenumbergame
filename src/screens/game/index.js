import React, { useState, useRef, useEffect} from "react";
import { View, Text, Button, Alert} from 'react-native';
import { CardWrapper, NumberContainer } from "../../components";
import colors from "../../utils/colors";
import { styles } from './styles';


const generateRandomNumber = (min, max, exclude) => { //funcion para num aleatorio
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (max - min) + min); //para que nunca supere 99 o nunca baje de 1
    //math random no genera números negativos, solo positivos
    if(randomNumber === exclude) {
        return generateRandomNumber(min, max, exclude); // que se repita la generacion random
    } else {
        return randomNumber;
    }
}

const GameScreen = ({selectedNumber, onGameOver}) => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1, 100, selectedNumber));
    const [rounds, setRound] = useState(0);

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const onHandleNextGuess = (direction) => {
        if(
            direction === 'lower' && currentGuess < selectedNumber ||
            direction === 'greater' && currentGuess > selectedNumber
        ) {
            Alert.alert('No mientas', 'Tu sabes que eso es malo', [{text: 'Perdón', style: 'Cancelar'}]);
            return;
        }
        if(direction === 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess;
        }
        const nextNumber = generateRandomNumber(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setRound(currentRounds => currentRounds + 1);
    }

    useEffect(() => {
        if(currentGuess === selectedNumber) {
            onGameOver(rounds);
        }
    }, [currentGuess, selectedNumber, onGameOver]);


    return (
        <View style={styles.container}>
            <CardWrapper style={styles.content}>
                <Text style={styles.title}>Número que dice tu oponente</Text>
                <NumberContainer number={currentGuess} />
                <View style={styles.containerButton}>
                    <Button
                        title="menor" 
                        onPress={() => onHandleNextGuess('lower')}
                        color={colors.secondary}
                    />
                    <Button
                        title="mayor"
                        onPress={() => onHandleNextGuess('greater')}
                        color={colors.primary}
                    />
                </View>
            </CardWrapper>
        </View>
    )
}

export default GameScreen;