import React from "react";
import styled from "styled-components";
import img1 from "./img/img1.webp";

export function Section1() {
  return (
    <Section1Container>
      <div className="border">
        <div className="img_container">
          <div className="elements">
            <p className="names">cynthia + donato</p>
            <img src={img1} alt="Cynthia + Donato" />
            <div className="weeding_date">
              <p className="phrase">save our date</p>
              <div className="date">
                <span>sabado</span>
                <span className="day">12</span>
                <span> 15:00 pm</span>
              </div>
              <p> - noviembre -</p>
              <p>AÑO DOS MIL VEINTIDOS </p>
            </div>
          </div>
        </div>
      </div>
    </Section1Container>
  );
}

const Section1Container = styled.div`
  height: 100vh;

  .border {
    padding: 50px;

    @media (max-width: 768px) {
      padding: 0px;
    }

    .img_container {
      background-color: #d9cab4;
      height: 100vh;
      padding: 50px 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      .elements {
        position: relative;
        text-transform: uppercase;
        .names {
          position: absolute;
          background-color: #fffdfa;
          padding: 5px 10px;
          left: 50%;
          top: -20px;
          transform: translateX(-50%);
        }

        .weeding_date {
          font-size: 30px;
          position: absolute;
          padding: 5px 10px;
          left: 50%;
          bottom: -20px;
          transform: translateX(-50%);
          text-align: center;
          color: #fffdfa;
          width: 100%;
        }
      }
    }
  }
`;
