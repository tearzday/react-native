import { Image, StyleSheet, View } from 'react-native';
import { Alert, Button, Input, LinkApp } from '../shared/ui';
import { COLORS, ROUNDED } from '../shared/styles';
import { useState } from 'react';
import { useUserStore } from '../entities';
import { router } from 'expo-router';

export default function Login() {
  const login = useUserStore((state) => state.login);
  const error = useUserStore((state) => state.error);
  const isLoading = useUserStore((state) => state.isLoading);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {

      // await login({ email: 'vasia@pupkin.ru', password: '12345678' });
       const success = await login({ email, password });
       if (success) {
         router.replace('/');
       }
  }

  return (
    <>
      <Alert text={error}/>
      <View style={styles.container}>
        <View style={styles.content}>
          <Image style={styles.logo} source={require('../assets/logo.png')} />
          <View style={styles.formContainer}>
            <Input style={styles.input} placeholder='Email' onChangeText={setEmail}/>
            <Input style={styles.input} placeholder='Пароль' onChangeText={setPassword} isPassword={true} placeholderTextColor="rgba(175, 178, 191, 1)"/>
            <Button title="Войти" onPress={handleLogin} isLoading={isLoading} />
          </View>
          <LinkApp href="/restore-password1" style={styles.linkText}>Восстановить пароль</LinkApp>
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
