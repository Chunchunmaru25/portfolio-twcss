import { Routes, Route } from 'react-router-dom'
import Welcome from './pages/welcome'
import { useEffect } from "react";

function App({ children }) {
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);
  return (
    <>
      <Routes>
        <Route path='/' element={<Welcome />} />
      </Routes>
    </>
  )
}

export default App;