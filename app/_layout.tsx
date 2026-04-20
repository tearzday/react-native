import { Slot, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../shared/styles";

export default function Layout() {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, backgroundColor: COLORS.BACKGROUND }}>
        <StatusBar style="light" />

        <Stack
          screenOptions={{
            headerShown: false,
            animation: "slide_from_right",
            contentStyle: {
              backgroundColor: COLORS.BACKGROUND,
            },
          }}
        />
      </View>
    </SafeAreaProvider>
  );
}