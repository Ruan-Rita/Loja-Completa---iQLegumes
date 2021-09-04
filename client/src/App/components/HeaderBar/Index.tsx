import React from "react";
import { Container } from "./styles";
const HeaderBar : React.FC = () =>{
    return (
        <Container>
            <ul>
                <li className='logo'><a href="/" >Home</a></li>
                <li><a href="/perfil" >Perfil</a></li>
            </ul>
        </Container>
    )
}

export default HeaderBar;

