import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin, AiFillPhone,AiFillMail} from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>
          <SocialIcons>
            <AiFillPhone size="3.5rem"/>
          </SocialIcons>
          </LinkTitle>
          <LinkItem href='tel:+918979483648'>+918979483648</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>
          <SocialIcons>
            <AiFillMail size="3.5rem"/>
          </SocialIcons>
          </LinkTitle>
          <LinkItem href='mailto:sharmav4568@gmail.com'>sharmav4568@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Feel free to connect with me on any of these Platforms.</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href='https://github.com/varunsh20'>
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href='https://www.linkedin.com/in/varunsh20/'>
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href='https://twitter.com/varunsh_20'>
          <AiFillTwitterCircle size="3rem" />
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
