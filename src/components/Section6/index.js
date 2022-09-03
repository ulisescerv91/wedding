import React from "react";
import styled from "styled-components";
import animal from "./img/animal.webp";

export function Section6() {
  return (
    <Section6Container>
      <h2>RECEPCIÓN</h2>
      <img src={animal} alt="libelula" className="animal" />
      <span>Hacienda de Chiapa</span>
      <span>16:00 PM</span>
      <span>Calle Francisco I. Madero 28530 Chiapa, Col.</span>
      <a
        href="https://www.google.com/maps/place/Hacienda+de+Chiapa/@19.3362772,-103.6553675,17z/data=!3m1!4b1!4m5!3m4!1s0x84255c0a6dca4b4d:0xc6ef45e22dbbcd50!8m2!3d19.3362772!4d-103.6553675"
        target="_blank"
        rel="noreferrer noopener"
        className="btnLink"
      >
        Ver Mapa
      </a>
    </Section6Container>
  );
}

const Section6Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  .animal {
    width: 70px;
  }
  .btnLink {
    padding: 10px 30px;
    border: 1px solid #333;
    border-radius: 2px;
    text-decoration: none;
    color: #333;
  }
`;
