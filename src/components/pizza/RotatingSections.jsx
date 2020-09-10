import React from 'react';

const SvgSection = ({ sectionPaths, section, tabIndex }) => {
  return (
    <g
      // tabIndex
      role={'img'}
      tabIndex={tabIndex}
      focusable={true}
      key={section}>
      {sectionPaths.map(({ path, ...restOfPath }, i) => {
        return (
          <path
            alt={section}
            key={`${path}${i}`}
            d={path}
            style={{
              ...restOfPath,
             
            }}
          />
        );
      })}
    </g>
  );
};

export default SvgSection;
