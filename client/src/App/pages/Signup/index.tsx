import React from "react";
import ButtonSubmit from "../../core-components/ButtonSubmit";
import Form from "../../core-components/Form";
import FormField from "../../core-components/FormField";
import { Container,Signup , Title, GroupField} from "./styles";


const SignupPage : React.FC = () =>{

    return (
        <Container>
            <Signup >
                <Title>Registra-se</Title>
                <Form action="asdasd" method="" >
                    <GroupField>
                        <FormField type="text" placeholder="Digite o Nome" required/>
                        <FormField type="text" placeholder="Digite o Sobrenome" required />
                    </GroupField>
                   
                    <FormField type="email" placeholder="Digite o E-mail" required/>
                    <FormField type="password" placeholder="Digite a Senha" required/>
                    <FormField type="password" placeholder="Confirme a Senha" required/>
                    <ButtonSubmit type="submit">FINALIZAR</ButtonSubmit>
                </Form>
            </Signup>
        </Container>
       
    );
}

export default SignupPage; 

