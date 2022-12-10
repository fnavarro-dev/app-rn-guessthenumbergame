import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get('window');
//El DIMENSIONS solo tiene sentido estático, si es responsive con Portrait o Landscape entonces ya no sirve
//a menos que sea estilo spbre el componente

export const styles = StyleSheet.create({
    // containerScroll: {
    //     flex: 1,
    //     paddingVertical: 20,
    // },
    
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        width: '80%',
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    contentLandscape: { 
        flex: 1,
        width: '80%',
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    contentDetails: {},
    textContent: {
        fontSize: 16,
        textAlign: 'center',
        paddingVertical: 10,
        fontFamily: 'Lato-Regular'
    },
    image: {
        width: 200,
        height: 200,
    },
});