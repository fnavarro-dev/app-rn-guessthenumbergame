import React from "react";
import { View } from "react-native";
import { styles } from './styles';

const CardWrapper = ({children, style}) => {
    return (
        <View style={{ ...styles.containerWrapper, ...style }}> 
            {children}
        </View>
    )
}

export default CardWrapper;
