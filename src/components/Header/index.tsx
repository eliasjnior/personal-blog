import React from 'react'

import { GrGithub, GrLinkedinOption } from 'react-icons/gr'

import {
  Container,
  Image,
  Menu,
  MenuLink,
  Presentation,
  Separator,
  SocialLink,
  SocialList,
  Title,
} from './styles'

const Header: React.FC = () => (
  <Container>
    <Title>Elias Júnior</Title>
    <Image src={'/profile.jpeg'} alt="Elias Júnior" />
    <Presentation>
      Hi, my name is Elias Júnior. Briefly introduce yourself here. You can also
      provide a link to the about page.
    </Presentation>
    <SocialList>
      <SocialLink href="#">
        <GrLinkedinOption size={22} />
      </SocialLink>
      <SocialLink href="#">
        <GrGithub size={22} />
      </SocialLink>
    </SocialList>
    <Separator />
    <Menu>
      <MenuLink to="/" active>
        Home
      </MenuLink>
      <MenuLink to="/blog">Blog</MenuLink>
      <MenuLink to="/about-me">About me</MenuLink>
      <MenuLink to="/contact">Contact</MenuLink>
    </Menu>
  </Container>
)

export default Header
