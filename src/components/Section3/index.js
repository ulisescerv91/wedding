import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import sec3img from "./img/sec3img.webp";
import girasol from "./img/girasol.webp";

export function Section3() {
  return (
    <Section3Container>
      <img src={sec3img} alt="ceremonia religiosa" />
      <img src={girasol} alt="girasol" className="girasol" />
      <span>CEREMONIA RELIGIOSA</span>
      <span>Capilla del Sagrado Corazón de Jesús</span>
      <span>15:00 PM</span>
      <span>Emiliano Zapata, 28530 Chiapa, Col.</span>
      <a
        href="https://www.google.com/maps/place/Capilla+del+Sagrado+Coraz%C3%B3n+de+Jes%C3%BAs/@19.2724636,-103.7437158,13z/data=!4m5!3m4!1s0x84255db36b9c456d:0xc35c8cd3ebc71604!8m2!3d19.3364194!4d-103.6546052"
        target="_blank"
        rel="noreferrer noopener"
        className="btnLink"
      >
        Ver Mapa
      </a>
    </Section3Container>
  );
}

const Section3Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  .girasol {
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
