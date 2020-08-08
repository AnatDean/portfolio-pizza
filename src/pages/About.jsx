import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

const Text = styled.p`
  font-weight: bold;
  font-size: ${rem('30px')};
`;

const About = () => (
  <section>
    <h1>About</h1>
    <h2>I love this</h2>
    <Text>
      blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
      blah blah blah blah blah blah blah blah blah blah blah blah blah
    </Text>
  </section>
);

export default About;
