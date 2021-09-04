import React from "react";
import { Container, Image } from "./styles";
const HomePage : React.FC = () =>{
    return (
        <Container>
            <Image>
                <img className="path" src={process.env.PUBLIC_URL + "/assets/banners/banner.jpg"} alt=""/>
                <p className="title">
                    <b>Tudo pra facilitar seu dia a dia</b>
                    O que você precisa está aqui. Peça e receba onde estiver.
                </p>
            </Image>
        </Container>
       
    );
}

export default HomePage; 

