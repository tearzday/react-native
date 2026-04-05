import { Pressable, StyleSheet, Text } from 'react-native';
import { COLORS, ROUNDED } from '../styles';

interface ButtonProps {
    title: string;
    onPress: () => void;
}

export function Button({ title, onPress }: ButtonProps) {
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: COLORS.ACCENT,
        padding: 16,
        borderRadius: ROUNDED.MEDIUM,
        alignItems: 'center',
    },
    buttonText: {
        color: COLORS.TEXT,
        fontWeight: 'bold',
        fontSize: 18,
    },
});
