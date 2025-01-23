import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, I&apos;m Varun Sharma <br />
        Full-Stack/Web3 Developer
      </SectionTitle>
      <SectionText>
      Blockchain and Web3 Developer specializing in building Smart Contracts and innovative full-stack dApps with expertise in distributed systems and scalable backend development.
      </SectionText>
      <a href='https://drive.google.com/file/d/1Gii3vXBw7c22eSdnU6FzygoNceDV10FL/view?usp=sharing'
      target='_blank' rel="noopener noreferrer"><Button>Resume</Button></a>
    </LeftSection>
  </Section>
);

export default Hero;
