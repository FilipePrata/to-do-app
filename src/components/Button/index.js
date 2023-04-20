import { Container } from "./styles";

import { Text } from "../Text";

export default function Button({ children, onPress, disabled, primary = true }){
    return(
        <Container onPress={onPress} disabled={disabled} primary={primary}>
            <Text color={primary ? '#fff' : '#333'}>{children}</Text>
        </Container>
    );
}
