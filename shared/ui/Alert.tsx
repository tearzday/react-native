import {Animated, StyleSheet ,Text, View} from 'react-native'
import { COLORS } from '../styles'
import { useEffect } from 'react';

interface AlertProps {
    text?: string,
    type?: 'success' | 'error'
}

export function Alert({text, type = 'error'}: AlertProps) {
  const animatedValue = new Animated.Value(-100);
  

   useEffect(() => {
        if(!text) return;

        Animated.sequence([
            Animated.timing(animatedValue, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.delay(2000),
            Animated.timing(animatedValue, {
                toValue: -100,
                duration: 300,
                useNativeDriver: true,
            }),
        ]).start();
    }, [text]);

  
  return (
    <Animated.View style={[styles.alert, styles[type], { transform: [{ translateY: animatedValue }] }]}>
        <Text style={styles.text}>{text}</Text>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
    alert: {
        position: 'absolute',
        width: '100%',
        zIndex: 99,
        paddingTop: 50,
    },
    success: {
        backgroundColor: COLORS.SUCCESS,
    },
    error: {
        backgroundColor: COLORS.ERROR,
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
        color: COLORS.TEXT,
        padding: 15
    }
})