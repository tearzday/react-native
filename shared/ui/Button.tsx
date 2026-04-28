import { ActivityIndicator, Pressable, StyleSheet, Text } from 'react-native';
import { COLORS, ROUNDED } from '../styles';
import { AppText } from './AppText';

interface ButtonProps {
    title: string;
    onPress: () => void;
    isLoading?: boolean;
}

export function Button({ title, onPress, isLoading }: ButtonProps) {
    return (
        <Pressable style={styles.button} onPress={onPress} disabled={isLoading}>
            {isLoading ? <ActivityIndicator size={22} color={COLORS.TEXT} /> 
            : <AppText style={styles.buttonText}>{title}</AppText>}
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
