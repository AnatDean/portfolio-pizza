import React from 'react';
import SocialIcons from '../social/icons';
import styled from 'styled-components';

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

`

const Home = () => (
  <section>
    <h1>Anat Dean</h1>
    <List>
      <li>Developer</li>
      <li>Lecturer</li>
      <li>Diversity Advocate</li>
    </List>
    <SocialIcons />
  </section>
);

export default Home;
