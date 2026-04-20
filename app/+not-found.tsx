import { SafeAreaView } from "react-native-safe-area-context"
import { AppText, LinkApp } from "../shared/ui"
import { Image, StyleSheet } from "react-native"
import { COLORS } from "../shared/styles"

export default function Unmatched() {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.img} source={require('../assets/unmatched.png')} />
      <AppText style={styles.info}>Ооо... что-то пошло не так.
        Попробуйте вернуться на главный экран приложения
        </AppText>
       <LinkApp href="/">На главный экран</LinkApp>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 50
  },
  img: {
    width: 200,
    height: 200,
    objectFit: 'contain',
  },
  info: {
    color: COLORS.TEXT,
    fontSize: 18,
    textAlign: 'center',
  }
})