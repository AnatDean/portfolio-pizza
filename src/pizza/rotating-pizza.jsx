import React from 'react';
import { pizzaPaths } from './grouped_sections';
import SvgSection from './RotatingSections';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';

const DivWrapper = styled.div.attrs((props) => ({ id: props.id }))`
  display: flex;
  align-items: center;

  @media (max-width: 570px) {
    flex-direction: column;
  }
`;

const SVG = styled.svg`
  grid-area: image;
  overflow: visible;
  position: absolute;
  right: -20vh;
  @media (max-width: 570px) {
    right: 2vh;
    top: -10vh;
  }
`;

export const SvgPaths = ({ yOffset, scrollHeight }) => {
  const sections = Object.keys(pizzaPaths);

  const renderSvgElements = () =>
    sections.map((section, i) => {
      const sectionPaths = pizzaPaths[section];
      const svgGroup = (
        <SvgSection
          key={section}
          section={section}
          sectionPaths={sectionPaths}
        />
      );
      return svgGroup;
    });
  return (
    <DivWrapper id='pizza'>
      {!isMobile ? (
        <SVG
          id='pizza-svg'
          height={'50vh'}
          width={'30vw'}
          transform={`rotate(${(yOffset / scrollHeight) * 360})`}
          viewBox='100 100 100 100'>
          {renderSvgElements()}
        </SVG>
      ) : (
        <SVG
          id='pizza-svg'
          height={'10vh'}
          width={'90vw'}
          transform={`rotate(${(yOffset / scrollHeight) * 360})`}
          viewBox='120 120 50 60'>
          {renderSvgElements()}
        </SVG>
      )}
    </DivWrapper>
  );
};
