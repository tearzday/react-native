import React, { useState } from "react";
import { Pressable, View, StyleSheet, TextInputProps, TextInput  } from "react-native";
import EyeOpen from "../../assets/icons/EyeOpen";
import EyeClose from "../../assets/icons/EyeClose";
import { COLORS, ROUNDED } from "../styles";

interface InputProps extends TextInputProps {
    isPassword?: boolean;
}

export function Input({ isPassword, ...props }: InputProps) {
    const [isValueVisible, setIsValueVisible] = useState(false);

    return (
        <View>
            <TextInput 
                style={styles.input} 
                secureTextEntry={isPassword && !isValueVisible} 
                placeholderTextColor={COLORS.PLACEHOLDER}
                {...props}
            />

            { isPassword && <Pressable style={styles.icon} onPress={() => setIsValueVisible(!isValueVisible)}>
                {isValueVisible ? <EyeClose/> : <EyeOpen/>}
                </Pressable>}
        </View>
    )
}


const styles = StyleSheet.create({
  input: {
    backgroundColor: COLORS.INPUT_BACKGROUND,
    height: 58,
    borderRadius: ROUNDED.MEDIUM,
    paddingHorizontal: 26,
    color: COLORS.TEXT,
    fontSize: 16
  },
  icon: {
    position: 'absolute',
    right: 16,
    top: 18,
  }
});
