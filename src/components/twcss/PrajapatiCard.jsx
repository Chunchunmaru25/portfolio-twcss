import React from 'react';
import styled from 'styled-components';

const Card = ({ title, svg, color, style, imgSize, sideColor }) => {
  return (
    <StyledWrapper>
      <div
        className={`card ${style}`}
        style={{ boxShadow: `inset 0 0 10px ${sideColor}` }}
      >
        <div className="flex flex-col items-center gap-4">
          <div
            className={`text-2xl rounded-full p-4 hover:scale-110 transition-transform duration-300`}
            style={{ backgroundColor: color }}
          >
            <img className={`${imgSize}`} src={svg} alt="" />
          </div>
          <div className="text-sm text-gray-500">{title}</div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    box-sizing: border-box;
    border: 1px solid white;
    backdrop-filter: blur(6px);
    border-radius: 17px;
    text-align: center;
    transition: all 0.5s;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    font-weight: bolder;
    color: black;
  }

  .card:hover {
    border: 1px solid black;
    transform: scale(1.05);
  }

  .card:active {
    transform: scale(0.95) rotateZ(1.7deg);
  }`;

export default Card;
