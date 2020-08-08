import React from 'react';
import SocialIcons from '../social/icons';
import styled from 'styled-components';
import { rem } from 'polished';
const Text = styled.p`
  font-weight: bold;
  font-size: ${rem('30px')};
`;
const SubText = styled.p`
  font-weight: bold;
  font-size: ${rem('15px')};
  color: grey;
`;

const Contact = () => (
  <section>
    <h1>Get In touch</h1>
    <SocialIcons />
    <Text>anat.dean@hotmail.com</Text>
    <SubText>Yes, I still use hotmail!</SubText>
  </section>
);

export default Contact;
