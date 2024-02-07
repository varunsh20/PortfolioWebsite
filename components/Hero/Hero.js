import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, I&apos;m Varun Sharma <br />
        Backend/Web3 Developer
      </SectionTitle>
      <SectionText>
      A Passionate Blockchain and Web3 Developer having specialization in Building Smart Contracts and Innovative Full-Stack dApps with Experience in Java Back-End Development
      </SectionText>
      <a href='https://drive.google.com/file/d/1GWGdCEm5gR6Zuesq6ZeiBs4-3xluT2H8/view?usp=sharing'
      target='_blank' rel="noopener noreferrer"><Button>Resume</Button></a>
    </LeftSection>
  </Section>
);

export default Hero;