import React from "react";
import { Container } from "./styles";

const ContentHome : React.FC = () => {
    return (
        <Container>
            <section className="atention">
                <div className="atention__itens">
                    <img src={process.env.PUBLIC_URL + "/assets/car-legumes.png"} alt="" />
                    <h1>Compre as melhores verdurinhas da região</h1>
                    <p>Na primeira compra, ganha um desconto de 10%</p>
                </div>
                <div className="atention__itens">
                    <h1>Compre as melhores verdurinhas da região</h1>
                    <p>Na primeira compra, ganha um desconto de 10%</p>
                    <img src={process.env.PUBLIC_URL + "/assets/desconto.png"} alt="" />
                </div>
            </section>
        </Container>
    );
}

export default ContentHome;