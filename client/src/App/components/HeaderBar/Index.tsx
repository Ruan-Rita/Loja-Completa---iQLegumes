import React from "react";
import { Container } from "./styles";
const HeaderBar : React.FC = () =>{
    return (
        <Container>
            <ul>
                <li className='logo'><a href="/" >Home</a></li>
                <div>
                    <li><a href="/perfil" >Perfil</a></li>
                    <li><a href="/perfil" >Cadastrar</a></li>
                    <li><a href="/perfil" >Login</a></li>
                </div>
            </ul>
        </Container>
    )
}

export default HeaderBar;

