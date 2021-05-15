import React from "react";
import SocialIcons from "../social/icons";
import styled from "styled-components";
import { rem } from "polished";
import { Title } from "../atoms/";

const List = styled.ul`
  list-style: none;
  font-size: 1.5em;
  font-family: "Montserrat", sans-serif;

  padding: 0;
  margin: 0;
  * {
    padding-bottom: 1em;
  }
`;

const Section = styled.section`
  text-align: start;
`;

const Home = () => (
  <Section>
    <Title fontSize={rem("60px")}>Anat Dean</Title>
    <List>
      <li>Developer</li>
      <li>Mentor</li>
      <li>Diversity Advocate</li>
    </List>
    <SocialIcons />
  </Section>
);

export default Home;
