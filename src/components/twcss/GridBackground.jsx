import React from 'react';
import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
const GridBackground = (style) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const updateTheme = () => {
      const theme = localStorage.getItem('theme');
      setIsDarkMode(
        theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
      );
    };
    updateTheme();
    window.addEventListener('storage', updateTheme);
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    return () => {
      window.removeEventListener('storage', updateTheme);
      observer.disconnect();
    };
  }, []);
  return (
    <StyledWrapper theme={isDarkMode ? "dark" : "light"}>
      <div className={`cyber-pattern absolute inset-0 -z-10 ${style}`} />
      <div className="relative z-10">

      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  --bg: ${({ theme }) => (theme === "dark" ? "#050505" : "#f0f0f0")};
  --vignette: ${({ theme }) => (theme === "dark" ? "#000" : "#ccc")};
  --cyan: ${({ theme }) => (theme === "dark" ? "3, 233, 244" : "0, 100, 255")};
  --magenta: ${({ theme }) => (theme === "dark" ? "217, 3, 244" : "255, 50, 200")};

  .cyber-pattern {
    width: 100%;
    height: 100%;
    background-color: var(--bg);
    background-image: 
      radial-gradient(circle at center, transparent 30%, var(--vignette) 90%),
      linear-gradient(rgba(var(--cyan), 0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(var(--cyan), 0.1) 1px, transparent 1px),
      linear-gradient(rgba(var(--magenta), 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(var(--magenta), 0.05) 1px, transparent 1px);
    background-size: 100% 100%, 60px 60px, 60px 60px, 20px 20px, 20px 20px;
    animation: cyber-move 10s linear infinite;
  }
`;
export default GridBackground;
