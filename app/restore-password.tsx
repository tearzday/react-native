import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppText } from '../shared/ui';

export default function RestorePassword() {
  return (
    <SafeAreaView>
      <AppText>restore-password</AppText>
      <Link href="/">Назад</Link>
    </SafeAreaView>
  )
}
