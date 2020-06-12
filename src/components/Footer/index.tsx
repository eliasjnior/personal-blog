import React from 'react'

import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'

const Footer: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box py={2}>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </Box>
    </Container>
  )
}

export default Footer
