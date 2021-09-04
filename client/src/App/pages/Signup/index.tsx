import React from "react";
import ButtonSubmit from "../../core-components/ButtonSubmit";
import Form from "../../core-components/Form";
import FormField from "../../core-components/FormField";
import { Container,Signup , Title} from "./styles";
const SignupPage : React.FC = () =>{
    return (
        <Container>
            <Signup >
                <Title>Registra-se</Title>
                <Form>
                    <FormField />
                    <ButtonSubmit>Confimar</ButtonSubmit>
                </Form>
            </Signup>
        </Container>
       
    );
}

export default SignupPage; 

