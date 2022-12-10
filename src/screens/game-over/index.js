import React, { useEffect, useState } from "react";
import { View, Text, Image, Button, Dimensions, ScrollView } from "react-native";
import { styles } from "./styles";
import { CardWrapper } from "../../components";
import colors from "../../utils/colors";


const GameOverScreen = ({rounds, selectedNumber, onRestart}) => {
    const [isPortrait, setIsPortrait] = useState(true);

    //ESTA DETECTA PORTRAIT O LANDSCAPE
    const onPortrait = () => {
        const dim = Dimensions.get('screen');
        return dim.height >= dim.width;
    }

    const statePortrait = () => {
        setIsPortrait(onPortrait); //en linea 8 la detea como propiedad
    }

    //CADA VEZ QUE CAMBIE LLAMA LA FUCNION onPortrait
    useEffect(() => {
        const suscription = Dimensions.addEventListener('change', statePortrait);

        return () => {
            suscription.remove();
        }
    });

    return (
        
        <View style={styles.container}>
            {/* aqui está como aplicar estilo segun orientacion */}
            <CardWrapper style={isPortrait ? styles.content : styles.contentLandscape}> 
                <Image
                source={{ uri: 'https://play-lh.googleusercontent.com/shAAX3m_CJQyahe1eIochbdEqH7FDiLEQ9i5WdI8DwNj2N9auke35k8CRmyL0mh7ULs' }} 
                style={styles.image} />
                <View style={styles.contentDetails}>
                    <Text style={styles.textContent}>Rondas: {rounds}</Text>
                    <Text style={styles.textContent}>El número era: {selectedNumber}</Text>
                    <Button
                        title="Reiniciar"
                        onPress={onRestart}
                        color={colors.secondary}
                    />
                </View>
            </CardWrapper>
        </View>
        
    )
}

export default GameOverScreen;