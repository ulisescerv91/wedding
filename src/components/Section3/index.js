import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import sec3img from "./img/sec3img.webp";
import girasol from "./img/girasol.webp";

export function Section3() {
  return (
    <Section3Container>
      <img src={sec3img} alt="ceremonia religiosa" className="imgReligiosa" />
      <img src={girasol} alt="girasol" className="girasol" />
      <span className="title">CEREMONIA RELIGIOSA</span>
      <span className="date">Capilla del Sagrado Corazón de Jesús</span>
      <span className="date">15:00 PM</span>
      <span className="address">Emiliano Zapata, 28530 Chiapa, Col.</span>
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
  .imgReligiosa {
    margin-top: 60px;
    transform: scale(1.7);
  }
  .girasol {
    width: 70px;
    margin-top: 60px;
  }

  .title {
    font-size: 28px;
    margin-bottom: 20px;
  }
  .date {
    font-size: 16px;
  }

  .address {
    margin-top: 20px;
    font-size: 14px;
  }

  .btnLink {
    margin-top: 10px;
    padding: 10px 30px;
    border: 1px solid #333;
    border-radius: 2px;
    text-decoration: none;
    color: #333;
  }
`;
