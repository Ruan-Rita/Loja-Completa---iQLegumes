import React from "react";
import { Container } from "./styles";
const HomePage : React.FC = () =>{
    return (
        <Container>
            <li><a href="/" >Home</a></li>
            <li><a href="/perfil" >Perfil</a></li>
        </Container>
    );
}

export default HomePage; 

