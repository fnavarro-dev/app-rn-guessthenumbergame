import React from "react";
import {View, Text, TextInput, Button} from "react-native";
import { styles } from "./styles";

const StartGameScreen = () => {
    return (
    <View style={styles.container}>
        <Text style={styles.title}>Comenzar juego</Text>
        <View style={styles.inputcontainer}>
                <Text style={styles.label}>Elige un número</Text>
                <TextInput style={styles.input} placeholder="0" />
            <View style={styles.buttonContainer}>
                <Button
                    title="Reiniciar"
                    onPress={() => null}
                    color="red"
                    />
                <Button
                    title="Confirmar"
                    onPress={() => null}
                    color= '#A7BED3'
                    />

        </View>
        </View>
    </View>

    );
}

export default StartGameScreen;