import React from "react";
import { TextInput } from 'react-native';
import { styles } from "./style";

const Input = ({ style, ...props}) => {
    return (
        <TextInput { ...props } style={{...styles.container, ...style}}
    />
    )
}

export default Input;
