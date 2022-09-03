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
                <span>sabado |</span>
                <span className="day">12</span>
                <span>| 15:00 pm</span>
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
  .border {
    padding: 50px;

    @media (max-width: 768px) {
      padding: 0px;
    }

    .img_container {
      background-color: #d9cab4;
      min-height: 80vh;
      padding: 100px 15px;
      display: flex;
      justify-content: center;
      .elements {
        position: relative;
        text-transform: uppercase;
        .names {
          position: absolute;
          background-color: #fffdfa;
          padding: 0px 15px;
          left: 50%;
          top: -30px;
          transform: translateX(-50%);
          width: 400px;
          font-size: 40px;
          z-index: 1;
        }

        .weeding_date {
          margin-top: -50px;
          font-size: 30px;
          text-align: center;
          color: #fffdfa;
          display: block;

          .phrase {
            font-size: 35px;
          }
          .date {
            font-size: 35px;
            .day {
              font-size: 65px;
              margin: 0 10px;
            }
          }
          p {
            font-size: 18px;
          }
        }
      }
    }
  }
`;
