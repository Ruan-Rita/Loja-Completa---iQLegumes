import React from "react";
import ButtonSubmit from "../../core-components/ButtonSubmit";
import Form from "../../core-components/Form";
import FormField from "../../core-components/FormField";
import { Container, Login , Title, GroupField} from "./styles";


const LoginPage : React.FC = () =>{

    return (
        <Container>
            <Login >
                <Title>lOGIN</Title>
                <Form action="asdasd" method="" >
                    <FormField type="email" placeholder="Digite o E-mail" required/>
                    <FormField type="password" placeholder="Digite a Senha" required/>
                    <ButtonSubmit type="submit">ENTRAR</ButtonSubmit>
                </Form>
            </Login>
        </Container>
       
    );
}

export default LoginPage; 

