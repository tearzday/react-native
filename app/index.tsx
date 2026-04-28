import { Text } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from "../shared/ui";
import { useUserStore } from "../entities";
import { Redirect } from "expo-router";


export default function App () {
    const logout = useUserStore((state) => state.logout)
    const token = useUserStore((state) => state.token)

      if(!token) {
        return <Redirect href="/login" />
      }

    const handleLogout = () => {
        logout()
    }

    return <SafeAreaView>
        <Text>{token}</Text>
        <Button title="Выйти" onPress={handleLogout} />
    </SafeAreaView>
}