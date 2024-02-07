import React from 'react';
import {DiReact, DiAws, DiCode} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Here are a few technologies and tools I’ve been working with recently:
    </SectionText>
    <List>
      <ListItem>
        <DiCode size="3rem" />
        <ListContainer>
          <ListTitle>Programming Languages</ListTitle>
          <ListParagraph>
            Experience with <br />
            Solidity, JavaScript, Java, Python and C++.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Frameworks and Libraries</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js, Node.js, Hardhat, Remix, Ethers.js, IPFS, ChakraUI and Spring Framework.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiAws size="3rem" />
        <ListContainer>
          <ListTitle>Infrastructure and DevOps</ListTitle>
          <ListParagraph>
            Experience with <br />
            MongoDB,MySQL, AWS, Postman, Git/GitHub and Netlify.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
