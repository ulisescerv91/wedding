import React from "react";
import styled from "styled-components";
import ring from "./img/ring.webp";
import bgImg from "./img/bgImg.webp";
import { Contador } from "../Contador/Contador";

export function Section2() {
  return (
    <Section2Container>
      <div className="texto_container">
        <div className="data">
          "DESPUÉS DE QUE EL DESTINO NOS PERMITIERA VOLVER A COINCIDIR, HEMOS
          DECIDIDO CONTINUAR CONSTRUYENDO DE LA MANO ESTE MÁGICO CAMINO LLAMADO
          VIDA. ESE DÍA NOS ENCANTARÍA COMPARTIR CON USTEDES, NUESTRO FESTEJO
          DEDICADO AL AMOR, A LA FELICIDAD Y A LA VIDA MISMA"
        </div>
      </div>
      <img src={ring} className="imgAnillo" alt="anillo de bodas" />
      <div className="contador_container">
        <Contador />
      </div>
    </Section2Container>
  );
}

const Section2Container = styled.div`
  position: relative;
  .texto_container {
    .data {
      background-image: url(${bgImg});
      padding: 60px 40px;
      text-align: justify;
      font-size: 16px;
      letter-spacing: 1px;
      line-height: 1.2;
      color: white;
    }
  }
  .imgAnillo {
    width: 60%;
    position: absolute;
    right: 30px;
    top: 210px;
    border: 4px solid #eee;
    border-radius: 5px;
  }
  .contador_container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin-top: 380px;
    margin-bottom: 50px;
    margin-left: 5%;
  }
`;
