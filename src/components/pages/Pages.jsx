import React from 'react';
import styled from 'styled-components';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Tech from './Tech';
import Contact from './Contact';

const MainWrapper = styled.main`
  grid-area: content;
  height: 100vh;
  overflow-y: scroll;
  text-align: start;
  padding: 1vh 40vh 0vh 2vh;
  -ms-overflow-style: none; /* IE 11 */
  scrollbar-width: none; /* Firefox 64 */

  section {
    min-height: 90vh;
  }

  @media (max-width: 570px) {
    margin-top: 5vh;
    padding: 5vh 3vh 0vh 3vh;
    width: 95%;
  }
`;

const Pages = ({ title, handleScroll }) => {
  return (
    <MainWrapper onScroll={handleScroll}>
      <Home />
      <br />
      <About />
      <br />
      <Tech />
      <br />
      <Projects />
      <br />
      <Contact />
    </MainWrapper>
  );
};
export default Pages;
