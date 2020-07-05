import React from 'react'

import { withPrefix } from 'gatsby'
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
    <Image src={withPrefix('/profile.jpeg')} alt="Elias Júnior" />
    <Presentation>
      I’m a software engineer specialized in frontend and backend development
      for complex scalable web apps. I’ve got more than 9 years of experience on
      building softwares for clients all over the world.
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
