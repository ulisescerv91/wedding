import React, { useEffect } from "react";
import styled from "styled-components";

export function Contador() {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let countDown = new Date("Nov 12, 2022 15:00:00").getTime();

  useEffect(() => {
    const interval = setInterval(function () {
      let now = new Date().getTime();
      let distance = countDown - now;

      document.getElementById("dias").innerText = Math.floor(distance / day);
      document.getElementById("horas").innerText = Math.floor(
        (distance % day) / hour
      );
      document.getElementById("minutos").innerText = Math.floor(
        (distance % hour) / minute
      );
      document.getElementById("segundos").innerText = Math.floor(
        (distance % minute) / second
      );
    }, second);
    return () => clearInterval(interval);
  });

  return (
    <Container>
      <span className="faltan">Faltan</span>
      <div className="time">
        <div id="dias"></div>
        <span>Dias</span>
      </div>
      <div className="time">
        <div id="horas"></div>

        <span>Horas</span>
      </div>
      <div className="time">
        <div id="minutos"></div>
        <span>Minutos</span>
      </div>
      <div className="time">
        <div id="segundos"></div>
        <span>Segundos</span>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  border: 1px solid #ccb186;
  border-style: double;
  justify-content: space-around;
  padding: 30px 0px;
  position: relative;
  width: 100%;
  &::after {
    content: "";
    position: absolute;
    left: 2;
    top: 2px;
    height: calc(100% - 5px);
    width: calc(100% - 5px);
    border: 1px solid #ccb186;
  }
  .faltan {
    position: absolute;
    left: 50%;
    top: -14px;
    transform: translateX(-50%);
    background-color: #fff;
    display: block;
    padding: 0px 15px;
    font-size: 24px;
    z-index: 1;
  }
  .time {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 40px;
    span {
      font-size: 16px;
    }
  }
`;
