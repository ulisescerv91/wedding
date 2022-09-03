import React from "react";
import styled from "styled-components";
import img1 from "./img/img1.webp";
import img2 from "./img/img2.webp";
import img3 from "./img/img3.webp";

export function Section7() {
  return (
    <Section7Container>
      <img src={img1} alt="Cynthia y Donato" className="imgSec7" />
      <img src={img2} alt="Cynthia y Donato" className="imgSec7" />
      <img src={img3} alt="Cynthia y Donato" className="imgSec7" />
    </Section7Container>
  );
}

const Section7Container = styled.div`
  background-color: #ba7e5b;
  padding: 40px 0;
  display: flex;
  justify-content: center;
  .imgSec7 {
    width: 25%;
    margin-left: 10px;
    margin-right: 10px;
  }
`;
