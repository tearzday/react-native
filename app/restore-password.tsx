import { Link } from 'expo-router';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RestorePassword() {
  return (
    <SafeAreaView>
      <Text>restore-password</Text>
      <Link href="/">Назад</Link>
    </SafeAreaView>
  )
}
