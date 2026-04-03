import React from 'react';
import styled from 'styled-components';

const OutlinedBtn = ({ text, icon }) => {
  return (
    <StyledWrapper>
      <button className='items-center gap-2'>
        {icon}
        {text}
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    --color: #560bad;
    font-family: inherit;
    display: flex;      
    padding: 0 1.5rem;         
    height: 3rem;
    line-height: 3rem;        
    position: relative;
    overflow: hidden;
    border: 2px solid var(--color);
    transition: color 0.5s;
    z-index: 1;
    font-size: 17px;
    border-radius: 1.5rem;
    font-weight: 500;
    color: var(--color);
    cursor: pointer;
    white-space: nowrap;       
  }

  button:before {
    content: "";
    position: absolute;
    z-index: -1;
    background: var(--color);
    height: 150px;
    width: 200px;
    border-radius: 50%;
    top: 100%;
    left: 100%;
    transition: all 0.7s;
  }

  button:hover {
    color: #fff;
  }

  button:hover:before {
    top: -30px;
    left: -30px;
  }

  button:active:before {
    background: #3a0ca3;
    transition: background 0s;
  }
`;

export default OutlinedBtn;