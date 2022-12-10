import { StyleSheet, Dimensions } from "react-native";
import colors from "../../utils/colors";

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    containerScroll: {
        flex: 1, //necesito el flex: 1 o sino no se ve nada
    },
    container: {
        flex: 1,
        alignItems: "center",
        marginVertical: 15,
    },
    title: {
        fontSize: 18,
        color: colors.text,
        textAlign: 'center',
        paddingVertical: 20,
    },
    label: {
        fontSize: 15,
        color: colors.text,
        paddingVertical:5,
        textAlign: 'center',
    },
    
    
    inputcontainer: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20, 
        paddingVertical: 20,
        minHeight: 200,
        //height: height * 0.3, // comentado porque en landscape da error
        
    },
    input: {
        width: '20%',
        minWidth: 70,
        fontSize: 22,
        paddingVertical: 10,
        textAlign: 'center',

    },
    buttonContainer: {
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-evenly',
        marginTop: 20,

    },

    confirmedContainer: {
        width: '74%',
        height: 180,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 20,
        paddingBottom: 10,
        
    },

    confirmedTitle: {
        fontSize: 16
    }
       
        
    
})