import React, { useState } from 'react';

const SvgSection = ({ sectionPaths, section, tabIndex }) => {
  return (
    <g
      // tabIndex
      role={'img'}
      tabIndex={tabIndex}
      focusable={true}
      // onFocus={() => setSectionInFocus(section)}
      // onMouseEnter={() => setSectionInFocus(section)}
      // onMouseLeave={() => setSectionInFocus('')}
      key={section}>
      {sectionPaths.map(({ path, ...restOfPath }, i) => {
        return (
          <path
            alt={section}
            key={`${path}${i}`}
            d={path}
            style={{
              ...restOfPath,
              // fill:
              //   isDimmed && section !== 'corners'
              //     ? 'rgb(133, 129, 129, 50%)'
              //     : restOfPath.fill,
            }}
          />
        );
      })}
    </g>
  );
};

export default SvgSection;
