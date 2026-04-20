import { SafeAreaView } from 'react-native-safe-area-context';
import { LinkApp, AppText } from '../shared/ui';

export default function RestorePassword() {
  return (
    <SafeAreaView>
      <AppText>restore-password</AppText>
      <LinkApp href="/">Назад</LinkApp>
    </SafeAreaView>
  )
}
