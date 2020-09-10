import React from 'react';
import SocialIcons from '../social/icons';
import styled from 'styled-components';
import { rem } from 'polished';
const Text = styled.p`
  font-weight: bold;
  font-size: ${rem('25px')};
`;
const SubText = styled.p`
  font-weight: bold;
  font-size: ${rem('15px')};
  color: grey;
`;
const Title = styled.h1`
  font-weight: bold;
  font-size: ${rem('30px')};
  text-decoration: underline;
`;
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
