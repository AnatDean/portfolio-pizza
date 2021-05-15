import React, { useState } from "react";
import "./App.css";
import { SvgPaths } from "./components/pizza/rotating-pizza";
import Pages from "./components/pages/Pages";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 3fr 1fr;
  grid-template-areas: "content image";

  @media (max-width: 570px) {
    grid-template-rows: 10vh 1fr;
    grid-template-columns: 1fr;
    grid-template-areas:
      "image"
      "content";
    justify-items: center;
  }
`;
const App = () => {
  const [yOffset, setYoffSet] = useState(0);
  const [prevYOffset, setPrevYOffSet] = useState(0);
  const [scrollHeight, setOffsetHeight] = useState(0);
  const handleScroll = (e) => {
    setPrevYOffSet(yOffset);

    setYoffSet(e.target.scrollTop);
    setOffsetHeight(e.target.scrollHeight);
  };

  return (
    <Wrapper className="App">
      <SvgPaths
        scrollHeight={scrollHeight}
        yOffset={yOffset}
        prevYOffset={prevYOffset}
      />
      <Pages handleScroll={handleScroll} title={"about"} />
    </Wrapper>
  );
};

export default App;
