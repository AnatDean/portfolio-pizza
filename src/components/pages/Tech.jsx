import React from 'react';
import CheckBoxList from '../CheckboxList';
import styled from 'styled-components';
import {rem} from 'polished'
const Section = styled.section`
  @media (max-width: 570px) {
    display: block;
    margin: 1em;
  }
`;
const Title = styled.h1`
font-weight: bold;
font-size: ${rem('30px')};
text-decoration: underline;
`

const Tech = () => (
  <Section>
    <Title>Tech</Title>
    <CheckBoxList />
  </Section>
);
export default Tech;
