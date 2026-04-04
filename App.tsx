import { TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Purple school</Text>
        <View style={styles.formContainer}>
          <TextInput style={styles.input} placeholder='Email' placeholderTextColor="rgba(175, 178, 191, 1)"/>
          <TextInput style={styles.input} placeholder='Пароль' secureTextEntry={true} placeholderTextColor="rgba(175, 178, 191, 1)"/>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Войти</Text>
          </TouchableOpacity>
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
    backgroundColor: 'rgba(22, 23, 29, 1)',
    justifyContent: 'center',
    padding: 55,
  },
  content: {
    alignItems: 'center',
    gap: 50,
  },
  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
  formContainer: {
    alignSelf: 'stretch',
    gap: 16,
  },
  input: {
    backgroundColor: 'rgba(46, 45, 61, 1)',
    height: 58,
    borderRadius: 10,
    paddingHorizontal: 26,
    color: 'white',
    fontSize: 16
  },
  button: {
    backgroundColor: 'rgba(108, 56, 204, 1)',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18
  },
  linkText: {
    color: 'rgba(169, 123, 255, 1)',
    fontSize: 18
  }
});
