import React from "react";
import SocialIcons from "../social/icons";
import styled from "styled-components";
import { Title, Text, SubText } from "../atoms";

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;
const Contact = () => (
  <Section>
    <Title>Get In touch</Title>
    <Text>anat.dean@hotmail.com</Text>
    <SubText>Yes, I still use hotmail!</SubText>
    <SocialIcons align={true} />
  </Section>
);

export default Contact;
