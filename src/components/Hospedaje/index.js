import React from "react";
import styled from "styled-components";
import fiesta from "./img/fiesta.gif";
import gama from "./img/gama.webp";

export function Hospedaje() {
  return (
    <HospedajeContainer>
      <h1>Opciones de hospedaje</h1>
      <div className="hospedaje_links">
        <a href="/" rel="noreferrer noopener" className="btnLink">
          <img src={fiesta} alt="Fiesta Inn" />
        </a>
        <a href="/" rel="noreferrer noopener" className="btnLink">
          <img src={gama} alt="Gamma Hoteles" />
        </a>
      </div>
      <div className="descuento">
        <span className="bold">CÓDIGO DE DESCUENTO:</span>
        <span>"Boda de Cynthia y Donato"</span>
      </div>
    </HospedajeContainer>
  );
}

const HospedajeContainer = styled.div`
  background-color: tomato;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  .hospedaje_links {
    margin-top: 40px;
    a {
      img {
        border-radius: 50%;
        height: 150px;
        height: 150px;
        margin-right: 30px;
      }
    }
  }
  .descuento {
    display: flex;
    margin-top: 20px;
    flex-direction: column;
    .bold {
      font-weight: bold;
    }
  }
`;
