import React from "react";
import styled from "styled-components";
import novios from "./img/novios.webp";
import flor from "./img/flor.webp";

export function Regalos() {
  return (
    <RegalosContainer>
      <img src={novios} alt="novios" />
      <div>
        <img src={flor} alt="flor" />
        <h2>sugerencias de regalos</h2>
        <div>
          <span>PA´ LOS NOVIOS</span>
          <a
            href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/50859745"
            target="_blank"
            rel="noreferrer noopener"
          >
            LIVERPOOL
          </a>

          <a
            href="https://www.amazon.com.mx/wedding/share/cynthiadonato121122"
            target="_blank"
            rel="noreferrer noopener"
          >
            AMAZON
          </a>
        </div>
        <div>
          <span>PA´ EL VIJAE</span>
          <a
            href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/50859745"
            target="_blank"
            rel="noreferrer noopener"
          >
            SHOW OVERLAY
          </a>
        </div>
      </div>
    </RegalosContainer>
  );
}

const RegalosContainer = styled.div``;
