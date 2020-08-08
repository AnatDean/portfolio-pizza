import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

const Text = styled.p`
  font-weight: bold;
  font-size: ${rem('30px')};
`;

const Projects = () => (
  <section>
    <h1>projects</h1>
    <Text>
      blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
      blah blah blah blah blah blah blah{' '}
    </Text>
    <Text>
      blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
      blah blah blah blah blah blah blah blah blah blah blah blah blah
    </Text>
  </section>
);

export default Projects;
