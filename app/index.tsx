import { Image, StyleSheet, View } from 'react-native';
import { Alert, Button, Input } from '../shared/ui';
import { COLORS, ROUNDED } from '../shared/styles';
import { useState } from 'react';
import { Link, } from 'expo-router';

export default function App() {
  const [error, setError] = useState<string | undefined>();

  const handleLogin = () => {
    if(!error) {
      setError('Неверный логин или пароль');
    
      setTimeout(() => {
        setError(undefined)
      }, 4000)
    }
  }

  return (
    <>
      <Alert text={error}/>
      <View style={styles.container}>
        <View style={styles.content}>
          <Image style={styles.logo} source={require('../assets/logo.png')} />
          <View style={styles.formContainer}>
            <Input style={styles.input} placeholder='Email'/>
            <Input style={styles.input} placeholder='Пароль' isPassword={true} placeholderTextColor="rgba(175, 178, 191, 1)"/>
            <Button title="Войти" onPress={handleLogin} />
          </View>
          <Link href="/restore-password" style={styles.linkText}>Восстановить пароль</Link>
        </View>
      </View>
    </>
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
