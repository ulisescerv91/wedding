import React from "react";
import styled from "styled-components";
import img1 from "./img/img1.webp";
import img2 from "./img/img2.webp";

export function Section4() {
  return (
    <Section4Container>
      <div className="group_img">
        <img src={img1} className="img1" alt="Cynthia y Donato" />
        <img src={img2} className="img2" alt="Cynthia y Donato" />
      </div>

      <div className="family">
        <span className="title">En compañía de nuestros queridos padres</span>
        <div>
          <div className="padres">
            <span>CYNTHIA TERESA FERRER ARREOLA</span>
            <span>CARLOS ARTURO GARCÍA ESCÁRPITA</span>
          </div>
          <div className="padres">
            <span>BLANCA E. VENTURA JIMÉNEZ</span>
            <span>DONATO DUEÑAS FLORES</span>
          </div>
        </div>
        <span>y hermanos</span>
        <p>ELEN, GLO, KAREN FRANCO Y ANDRÉS</p>
      </div>
    </Section4Container>
  );
}

const Section4Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  .group_img {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .img1 {
      border-radius: 2px;
      border: 7px solid #333;
    }

    .img2 {
      transform: rotate(-20deg);
      border-radius: 2px;
      border: 3px solid #333;
      margin-left: 70px;
    }
  }

  .family {
    text-transform: uppercase;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    .title {
      font-size: 26px;
      text-align: center;
    }
    div {
      .padres {
        font-size: 16px;
      }
    }
  }
`;
