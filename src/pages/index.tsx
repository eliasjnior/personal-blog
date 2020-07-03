import React from 'react'

import { GrGithub, GrLinkedinOption } from 'react-icons/gr'

import GlobalStyle from '~/styles/GlobalStyle'

import {
  Header,
  Image,
  Menu,
  MenuLink,
  Presentation,
  Separator,
  SocialLink,
  SocialList,
  Title,
} from './styles'

const Home: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header>
        <Title>Elias Júnior</Title>
        <Image src={'/profile.jpeg'} alt="Elias Júnior" />
        <Presentation>
          Hi, my name is Elias Júnior. Briefly introduce yourself here. You can
          also provide a link to the about page.
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
          <MenuLink href="#" active>
            Home
          </MenuLink>
          <MenuLink href="#">Blog</MenuLink>
          <MenuLink href="#">About me</MenuLink>
          <MenuLink href="#">Contact</MenuLink>
        </Menu>
      </Header>
    </>
  )
}

export default Home
