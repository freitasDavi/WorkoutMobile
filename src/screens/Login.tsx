import { Box, Text } from "@gluestack-ui/themed";
import { LoginForm } from "../components/forms/LoginForm";


export function LoginPage() {
    return (
        <Box backgroundColor='$coolGray900' pt="$40" alignItems='center' width="100%" height="$full" gap="$20">
            <Text color='$white' fontWeight='$bold' size='3xl'>Welcome to Workout!</Text>
            <LoginForm />
        </Box>
    )
}