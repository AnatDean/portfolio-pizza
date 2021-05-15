import React from "react";
import SocialIcons from "../social/icons";
import styled from "styled-components";
import { Title, SubText, Link } from "../atoms";

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;
const Contact = () => (
  <Section>
    <Title>Get In touch</Title>
    <Link href="mailto:anat.dean@hotmail.com">anat.dean@hotmail.com</Link>
    <SubText>Yes, I still use hotmail!</SubText>
    <SocialIcons align={true} />
  </Section>
);

export default Contact;
