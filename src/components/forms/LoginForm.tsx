import { Box, Button, ButtonText, FormControl, FormControlLabel, FormControlLabelText, Input, InputField } from "@gluestack-ui/themed";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, 'A senha deve possuir no mínimo 6 caractéres')
})

type loginS = z.infer<typeof loginSchema>;

export function LoginForm() {
    const { control, handleSubmit } = useForm<loginS>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const handleLogin = (data: loginS) => {
        console.log(data);
    }

    return (
        <Box h="$32" w="$72" gap="$10">
            <Controller
                control={control}
                name="email"
                render={({ field: { onChange } }) => (
                    <FormControl>
                        <FormControlLabel>
                            <FormControlLabelText color="$white">Email</FormControlLabelText>
                        </FormControlLabel>
                        <Input>
                            <InputField placeholderTextColor="$white" onChangeText={onChange} type="text" defaultValue="" placeholder="davi@gmail.com" />
                        </Input>
                    </FormControl>
                )}
            />

            <Controller
                control={control}
                name="password"
                render={({ field: { onChange } }) => (
                    <FormControl>
                        <FormControlLabel>
                            <FormControlLabelText color="$white">Password</FormControlLabelText>
                        </FormControlLabel>
                        <Input>
                            <InputField
                                placeholderTextColor="$white"
                                type="password" onChangeText={onChange} defaultValue="" placeholder="*******" />
                        </Input>
                    </FormControl>
                )}
            />

            <Button bg="$green500" size="lg" onPress={handleSubmit(handleLogin)}>
                <ButtonText>Login</ButtonText>
            </Button>


        </Box>
    )
}