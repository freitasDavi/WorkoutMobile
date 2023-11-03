import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { LoginPage } from "../screens/Login";

const Stack = createNativeStackNavigator();

export function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="login" component={LoginPage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}