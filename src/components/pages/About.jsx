import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
const Text = styled.p`
  font-size: ${rem('25px')};
`;
const Title = styled.h1`
font-weight: bold;
font-size: ${rem('30px')};
text-decoration: underline;
`

const About = () => (
  <section>
    <Title>About Me</Title>
    <Text>
      Current senior lecturer in Full Stack Web Development at Northcoders in
      Manchester.
    </Text>
    <Text>
      Experienced in frontend and backend projects. I have keen interest in UX,
      design and accessibility. Agile, testing, communication, and documentation
      are central to my working process. I am skilled at inheriting and
      debugging large unfamiliar code-bases.
    </Text>
    <Text> Oh, and I do love a good refactor.</Text>
  </section>
);

export default About;
