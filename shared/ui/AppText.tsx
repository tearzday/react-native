import { Text, TextStyle } from "react-native";
import { FONTS } from "../styles/constants";

interface AppTextProps {
  children: React.ReactNode;
  weight?: keyof typeof FONTS; // 'regular' | 'bold'
  style?: TextStyle;
}
export const AppText = ({ children, weight = "regular", style }: AppTextProps) => {
  return (
    <Text style={[{ fontFamily: FONTS[weight] }, style]}>{children}</Text>
  )
}
