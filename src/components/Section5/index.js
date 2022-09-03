import React from "react";
import styled from "styled-components";
import bailando from "./img/bailando.webp";
import bg from "./img/bg.webp";

export function Section5() {
  return (
    <Section5Container>
      <div className="img_container">
        <img src={bailando} alt="baildando" />
        <span className="phrase">
          "Que el fin del mundo nos pille bailando"
        </span>
      </div>
    </Section5Container>
  );
}

const Section5Container = styled.div`
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 800px;
  padding: 0 40px;

  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  .img_container {
    position: relative;
    .phrase {
      position: absolute;
      color: white;
      font-size: 22px;
      left: 50%;
      top: 10px;
      transform: translateX(-50%);
      width: 390px;
    }
  }
`;
