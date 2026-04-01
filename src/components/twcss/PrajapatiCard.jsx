import React from 'react';
import styled from 'styled-components';

const Card = ({ title, svg, color }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className='flex flex-col items-center gap-4'>
          <div
            className={`text-2xl rounded-full ${color} dark:${color} p-4 hover:scale-110 transition-transform duration-300`}
            dangerouslySetInnerHTML={{ __html: svg }}
          />
          <div className='text-sm text-gray-500'>{title}</div>

        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    box-sizing: border-box;
    width: 250px;
    height: 230px;
    border: 1px solid white;
    box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
    backdrop-filter: blur(6px);
    border-radius: 17px;
    text-align: center;
    cursor: pointer;
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
