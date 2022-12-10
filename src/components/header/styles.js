import {StyleSheet, Dimensions} from "react-native";

// const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        height: 100, //me da error el Dimensions, ocuparé pixel ratio 
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40,

    },

    titleheader: {
        fontSize: 20,
        color: '#ffffff',
        fontFamily: 'Lato-Regular',
    }
});