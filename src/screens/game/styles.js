import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    content: {
        width: '80%',
        height: height * 0.22, //aquí el dimensions si funca
        minHeight: 200, //esto en pantalla chica dpp impide que se vea muy chico con la propiedad de arriba
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    title: {
        fontSize: 16,
    },
    containerButton: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});