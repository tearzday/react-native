import { Image, TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native';
import { Input } from './shared/ui';
import { Button } from './shared/ui/Button';
import { COLORS, ROUNDED } from './shared/styles';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.logo} source={require('./assets/logo.png')} />
        <View style={styles.formContainer}>
          <Input style={styles.input} placeholder='Email'/>
          <Input style={styles.input} placeholder='Пароль' isPassword={true} placeholderTextColor="rgba(175, 178, 191, 1)"/>
          <Button title="Войти" onPress={() => {}} />
        </View>
        <TouchableOpacity>
          <Text style={styles.linkText}>Восстановить пароль</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
    justifyContent: 'center',
    padding: 55,
  },
  content: {
    alignItems: 'center',
    gap: 50,
  },
  logo: {
    width: 160,
    resizeMode: 'contain',
    
  },
  formContainer: {
    alignSelf: 'stretch',
    gap: 16,
  },
  input: {
    backgroundColor: COLORS.INPUT_BACKGROUND,
    height: 58,
    borderRadius: ROUNDED.MEDIUM,
    paddingHorizontal: 26,
    color: COLORS.TEXT,
    fontSize: 16
  },
  button: {
    backgroundColor: COLORS.ACCENT,
    padding: 16,
    borderRadius: ROUNDED.MEDIUM,
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.TEXT,
    fontWeight: 'bold',
    fontSize: 18
  },
  linkText: {
    color: COLORS.LINK,
    fontSize: 18
  }
});
