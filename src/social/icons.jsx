import React from 'react';
import Lottie from 'react-lottie';
import githubAnimationData from '../assetts/lotties/github.json';
import linkedInSVG from '../assetts/lotties/linkedin.svg';
import youtubeAnimation from '../assetts/lotties/youtube.json';
import styled from 'styled-components';

const defaultOptions = {
  loop: false,
  delay: '1s',
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};
const Social = styled.img`
  height: 5em;
  margin: 1em;
`;

const SizedA = styled.a.attrs((props) => props)`
  height: 5em;
  margin: 1em;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const SocialIcons = () => (
  <Wrapper>
    <a
      target='_blank'
      rel='noopener noreferrer'
      href='https://www.linkedin.com/in/anat-dean-59b993ab'>
      <Social alt={'linkedIn logo'} src={linkedInSVG} />
    </a>
    <a
      target='_blank'
      rel='noopener noreferrer'
      href='https://youtu.be/Ed_R5EyHgeA'>
      <Lottie
        style={{ margin: 0 }}
        options={{ ...defaultOptions, animationData: youtubeAnimation }}
        height={100}
        width={100}
      />
    </a>
    <a
      target='_blank'
      rel='noopener noreferrer'
      href='https://github.com/AnatDean'>
      <Lottie
        style={{ margin: 0 }}
        options={{
          ...defaultOptions,
          loop: true,
          animationData: githubAnimationData,
        }}
        height={100}
        width={100}
      />
    </a>
  </Wrapper>
);

export default SocialIcons;
