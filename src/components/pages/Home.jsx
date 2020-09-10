import React from 'react';
import SocialIcons from '../social/icons';
import styled from 'styled-components';
import {rem} from 'polished'
const List = styled.ul`
  list-style: none;
  font-size: 1.5em;
  font-family: 'Montserrat', sans-serif;

  padding: 0;
  margin: 0;
  * {
    padding-bottom: 1em;
  }
`;

const Section = styled.section`
  text-align:start;
`;

const Title = styled.h1`
font-weight: bold;
font-size: ${rem('30px')};
text-decoration: underline;
`

const Home = () => (
  <Section>
    <Title>Anat Dean</Title>
    <List>
      <li>Developer</li>
      <li>Lecturer</li>
      <li>Diversity Advocate</li>
    </List>
    <SocialIcons />
  </Section>
);

export default Home;
