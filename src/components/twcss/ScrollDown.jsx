import React from 'react';
import styled from 'styled-components';

const ScrollDown = () => {
  const setScrollDown = () => {
    window.scrollBy({
      top: 300,
      left: 0,
      behavior: "smooth"
    });
  };


  return (
    <StyledWrapper>
      <div className="main__action" onClick={() => { setScrollDown() }}>
        <a className="main__scroll" href="#">
          <div className="main__scroll-box">
            <svg viewBox="0 0 24 24" className='fill-black dark:fill-white'>
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M11.9997 13.1716L7.04996 8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z"
              />
            </svg>
          </div>
          <span className="main__scroll-text text-black dark:text-white whitespace-nowrap">
            Scroll Down
          </span>
        </a>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  a {
    text-decoration: none;
  }

  /* Container */
  .main__action {
    position: fixed;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg{
  animation: scroll-down 1.5s infinite;
  }
  
  /* Clickable area */
  .main__scroll {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    cursor: pointer;
  }

  /* Icon box */
  .main__scroll-box {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: 100%;
    height: 100%;
  }

  /* Text */
  .main__scroll-text {
    font-size: 12px;
  }

  /* Hover animation */
  .main__scroll:hover .main__scroll-box {
    animation: scroll-down 1.5s infinite;
  }

  @keyframes scroll-down {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    50% {
      transform: translateY(8px);
      opacity: 0.5;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export default ScrollDown;