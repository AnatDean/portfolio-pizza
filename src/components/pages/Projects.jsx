import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

const Text = styled.p`
  font-size: ${rem('25px')};
  text-decoration: ${({ title }) => title && 'underline'};
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: ${rem('30px')};
  text-decoration: underline;
`;

const Projects = () => (
  <section>
    <Title>Recent Projects</Title>
    <Text title={true}>Curriculum Application (Northcoders Notes):</Text>
    <Text>
      Stack: React Hooks, React Testing Library, Jest, GraphQL, Firebase, OAuth,
      Styled Components, Github Apps
    </Text>
    <Text>
      What: Fully authenticated site to interact with existing curriculum
      resources and display them to students based on their current position on
      their course.
    </Text>
    <Text title={true}>HILS System</Text>
    <Text>Stack: Python, Django, HTML, CSS, Elastic Beanstalk, EC2, RDS</Text>
    <Text>
      What: Providing maintenance and working on tickets to a charity
      infrastructure on a contractual basis.
    </Text>
  </section>
);

export default Projects;
