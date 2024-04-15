import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom'; // Importe BrowserRouter
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './util/themes';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height:100%;
  overflow-x: hidden;
`;
const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`;

function App() {
  const [darkMode, setDarkMode] = useState(false); // Assuming initial state is light mode

  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <NavBar />
        <Body>
          <HeroSection />
          <Wrapper>
            <Skills />
            <Education />
          </Wrapper>
          <Wrapper>
            <Experience />
          </Wrapper>
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
export { darkTheme, lightTheme };
