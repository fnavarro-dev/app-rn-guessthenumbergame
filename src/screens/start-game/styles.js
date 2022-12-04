import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
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
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20, 
        paddingVertical: 20,
    },
    input: {
        width: '100%',
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