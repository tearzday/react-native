import { Link } from "expo-router"
import { COLORS } from "../styles"
import { StyleSheet } from "react-native"


export const LinkApp = (props: React.ComponentProps<typeof Link>) => {
  return (
    <Link {...props} style={styles.linkText}>{props.children}</Link>
  )
}

const styles = StyleSheet.create({
  linkText: {
    color: COLORS.ACCENT,
    fontSize: 18,
    textAlign: 'center',
  }
})