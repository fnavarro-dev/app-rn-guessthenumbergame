import React, {useState} from "react";
import {View, Text, Button, TouchableWithoutFeedback, Keyboard, Alert, ScrollView, KeyboardAvoidingView, Platform} from "react-native";
import { CardWrapper, InputComponent, NumberContainer } from "../../components";
import colors from "../../utils/colors";
import { styles } from "./styles";



const StartGameScreen = ({onStartGame}) => {
    const [number, setNumber] = useState(''); //guarda el valor del input
    const [selectedNumber, setSelectedNumber] = useState(null);
    const [confirmed, setConfirmed] = useState(false);

    const onHandleChange = (value) => {
        setNumber(value.replace(/[^0-9]/g, ''));
    }
    
    const onHandleReset = () => {
        setNumber('');
        setConfirmed(false);
    }

    const onHandleConfirm = () => {
        const chosenNumber = parseInt(number, 10); //parsearlo a entero porque estaba String ''
        //condicional para ultra validar que es un numero
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Número inválido', 'Elige número entre 1 y 99', [{text: 'Entiendo', style: 'destructive', onPress: onHandleReset}]);
        } else {
            setConfirmed(true); //pasar al módulo de abajo
            setSelectedNumber(chosenNumber);
            setNumber('');
        }
    }


    
    const confirmedOutput = () => confirmed ? (
        <CardWrapper style={styles.confirmedContainer}>
            <Text style={styles.confirmedTitle}>Tu número elegido es</Text>
            <NumberContainer number={selectedNumber} />
            <Button 
                title="Comenzar juego"
                onPress={() => onStartGame(selectedNumber)}
                color={colors.primary}
            />
        </CardWrapper>
    ) : null;
    
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'height' : 'padding'} style={styles.containerScroll}>
    <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
    }}>
    <ScrollView style={styles.containerScroll}>
        <View style={styles.container}>
            <Text style={styles.title}>Comenzar juego</Text>
            <CardWrapper style={styles.inputcontainer}>
                    <Text style={styles.label}>Elige un número</Text>
                    <InputComponent 
                    style={styles.input} 
                    placeholder="0" 
                    maxLength={2}
                    keyboardType="number-pad"
                    blurOnSubmit
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={onHandleChange}
                    value={number}
                    />
                <View style={styles.buttonContainer}>
                    <Button
                        title="Reiniciar"
                        onPress={onHandleReset}
                        color={colors.secondary}
                        />
                    <Button
                        title="Confirmar"
                        onPress={onHandleConfirm}
                        color= {colors.primary}
                        />

                </View>
            </CardWrapper>
            {confirmedOutput()}
        </View>
    </ScrollView>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    );
}

export default StartGameScreen;