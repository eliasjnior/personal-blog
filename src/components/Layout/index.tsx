import React from 'react'

import Header from '~/components/Header'
import GlobalStyle from '~/styles/GlobalStyle'

import { Content } from './styles'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Content>{children}</Content>
    </>
  )
}

export default Layout
