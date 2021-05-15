import React from "react";
import CheckBoxList from "../CheckboxList";
import styled from "styled-components";
import { Title } from "../atoms";

const Section = styled.section`
  @media (max-width: 570px) {
    display: block;
    margin: 1em;
  }
`;

const Tech = () => (
  <Section>
    <Title>Tech</Title>
    <CheckBoxList />
  </Section>
);
export default Tech;
