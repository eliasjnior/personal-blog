import React from 'react'

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core'
import { graphql, useStaticQuery } from 'gatsby'

import GlobalStyle from '~/styles/GlobalStyle'
import MuiTheme from '~/styles/MuiTheme'

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
          <main> adsf asdfa ssa</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </Wrapper>
      </MuiThemeProvider>
    </>
  )
}

export default Layout
