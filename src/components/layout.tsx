import React from 'react'

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core'
import { graphql, useStaticQuery } from 'gatsby'

import GlobalStyle from '~/styles/GlobalStyle'
import MuiTheme from '~/styles/MuiTheme'

import Header from './header'

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
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </MuiThemeProvider>
    </>
  )
}

export default Layout
