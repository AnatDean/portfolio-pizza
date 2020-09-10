import React, { useState } from 'react';

import CheckBox from './CheckBox';
import styled from 'styled-components';
import TechList from './TechStackList';
import { rem } from 'polished';

const Form = styled.form`
  width: 100%;
  font-size: ${rem('20px')};
  display: flex;
  flex-flow: column wrap;

  @media (max-width: 570px) {
    flex-direction: row;
  }

  label {
    padding: ${rem('10px')};
    padding-left:0;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  @media (min-width: 570px) {
    min-height: 65vh;
  }

  flex: 1 1 auto;
`;

const CheckBoxList = () => {
  const [displaySection, setDisplaySection] = useState('Front End');

  const sections = [
    {
      text: 'Languages',
      isChecked: displaySection === 'Languages',
      handler: () => setDisplaySection('Languages'),
    },
    {
      text: 'Front End',
      isChecked: displaySection === 'Front End',
      handler: () => setDisplaySection('Front End'),
    },
    {
      text: 'Back End',
      isChecked: displaySection === 'Back End',
      handler: () => setDisplaySection('Back End'),
    },
    {
      text: 'Dev Ops',
      isChecked: displaySection === 'Dev Ops',
      handler: () => setDisplaySection('Dev Ops'),
    },
    {
      text: 'Other',
      isChecked: displaySection === 'Other',
      handler: () => setDisplaySection('Other'),
    },
  ];

  return (
    <Wrapper>
      <Form>
        {sections.map((section) => (
          <CheckBox key={section.text} section={section} />
        ))}
      </Form>
      <TechList display={displaySection} />
    </Wrapper>
  );
};

export default CheckBoxList;
