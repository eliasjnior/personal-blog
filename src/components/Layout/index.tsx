import React from 'react'

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import { graphql, useStaticQuery } from 'gatsby'

import GlobalStyle from '~/styles/GlobalStyle'
import MuiTheme from '~/styles/MuiTheme'

import Footer from '../Footer'
import Header from '../Header'
import { Wrapper } from './styles'

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <MuiThemeProvider theme={MuiTheme}>
        <GlobalStyle />
        <Header siteTitle={data.site.siteMetadata.title} />
        <Wrapper className="teste">
          <Container maxWidth="lg">
            <Box py={2}>{children}</Box>
          </Container>
          <Footer />
        </Wrapper>
      </MuiThemeProvider>
    </>
  )
}

export default Layout
