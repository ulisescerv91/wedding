import React from "react";
import styled from "styled-components";
import hoja from "./img/hoja.webp";

export function Section8() {
  return (
    <Section8Container>
      <img src={hoja} alt="hoja" />
      <span>Hemos reservado lugar para</span>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLScCbU_UYrrydUM0xnuM_tq8uoY0zdhVVWdGC5BKvqYFrlr9yQ/viewform"
        target="_blank"
        rel="noreferrer noopener"
        className="btnLink"
      >
        confirmar asistencia
      </a>
      <span>*A más tardar el 15 de octubre</span>
    </Section8Container>
  );
}

const Section8Container = styled.div``;
