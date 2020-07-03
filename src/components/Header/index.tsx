import React from 'react'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { Link } from 'gatsby'

import { Wrapper } from './styles'

interface HeaderProps {
  siteTitle: string
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => (
  <Wrapper>
    <Box p={2}>
      <Typography variant="h1" align="center">
        <Link to="/">{siteTitle}</Link>
      </Typography>
      <Typography align="center">
        Hi, my name is Elias Júnior and I'm a senior software engineer. Welcome
        to my personal website!
      </Typography>
    </Box>
  </Wrapper>
)

export default Header
