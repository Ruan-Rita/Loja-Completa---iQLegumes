import React from "react";
import Content from "../../components/Content";
import ContentHome from "./components/ContentHome";
import { Container, Image } from "./styles";
const HomePage : React.FC = () =>{
    return (
        <Container>
            <Image>
                <img className="path" src={process.env.PUBLIC_URL + "/assets/banners/banner.jpg"} alt=""/>
                <div className="title">
                    <h3>Tudo pra facilitar seu dia a dia</h3>
                    <p>O que você precisa está aqui. Peça e receba onde estiver.</p>
                </div>
            </Image>
            <ContentHome>
                
            </ContentHome>
        </Container>
       
    );
}

export default HomePage; 

