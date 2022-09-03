import React from "react";
import styled from "styled-components";
import dressCode from "./img/dressCode.webp";

export function Section9() {
  return (
    <Section9Container>
      <h2>dress code</h2>
      <img src={dressCode} alt="dressCode" />
      <span>color palette</span>
    </Section9Container>
  );
}

const Section9Container = styled.div``;
