import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginVertical: 15,
    },
    title: {
        fontSize: 18,
        color: '#212121',
        textAlign: 'center',
        paddingVertical: 20,
    },
    label: {
        fontSize: 15,
        color: '#212121',
        paddingVertical:5,
        textAlign: 'center',
    },
    inputcontainer: {
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5, 
    },
    input: {
        width: '100%',
        borderbottomcolor: '#A7BED3',
        borderBottomWidth: 1,
        minWidth: 70,
        fontSize: 22,
        paddingVertical: 10,
        textAlign: 'center',

    },
    buttonContainer: {
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-around',
        marginTop: 20,
    },
       
        
    
})