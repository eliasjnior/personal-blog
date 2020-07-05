import React from 'react'

import { useLocation } from '@reach/router'
import { graphql, useStaticQuery, withPrefix } from 'gatsby'
import { AiFillHome } from 'react-icons/ai'
import { GrGithub, GrLinkedinOption, GrMail } from 'react-icons/gr'
import { IoMdDocument } from 'react-icons/io'

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

type Query = {
  site: {
    siteMetadata: {
      title: string
      description: string
      social: {
        linkedin: string
        github: string
        email: string
      }
    }
  }
}

const Header: React.FC = () => {
  const { pathname } = useLocation()

  const { site } = useStaticQuery<Query>(graphql`
    {
      site {
        siteMetadata {
          title
          description
          social {
            linkedin
            github
            email
          }
        }
      }
    }
  `)

  return (
    <Container>
      <Title>{site.siteMetadata.title}</Title>
      <Image src={withPrefix('/profile.jpeg')} alt="Elias Júnior" />
      <Presentation>{site.siteMetadata.description}</Presentation>
      <SocialList>
        <SocialLink target="_blank" href={site.siteMetadata.social.linkedin}>
          <GrLinkedinOption size={22} />
        </SocialLink>
        <SocialLink target="_blank" href={site.siteMetadata.social.github}>
          <GrGithub size={22} />
        </SocialLink>
        <SocialLink href={`mailto:${site.siteMetadata.social.email}`}>
          <GrMail size={22} />
        </SocialLink>
      </SocialList>
      <Separator />
      <Menu>
        <MenuLink to="/" active={pathname === '/'}>
          <AiFillHome size={22} />
          Home
        </MenuLink>
        <MenuLink to="/blog" active={pathname === '/blog'}>
          <IoMdDocument size={22} />
          Blog
        </MenuLink>
        <MenuLink to="/contact" active={pathname === '/contact'}>
          <GrMail size={22} />
          Contact
        </MenuLink>
      </Menu>
    </Container>
  )
}

export default Header
