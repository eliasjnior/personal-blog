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
      <Typography variant="h1">
        <Link to="/">{siteTitle}</Link>
      </Typography>
    </Box>
  </Wrapper>
)

export default Header
