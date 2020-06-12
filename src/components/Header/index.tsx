import React from 'react'

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { Link } from 'gatsby'

import { Wrapper } from './styles'

interface HeaderProps {
  siteTitle: string
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => (
  <Wrapper>
    <Container maxWidth="lg">
      <Typography variant="h1">
        <Link to="/">{siteTitle}</Link>
      </Typography>
    </Container>
  </Wrapper>
)

export default Header
