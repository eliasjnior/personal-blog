import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

const NotFoundPage: React.FC = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Página não encontrada</h1>
    <p>Esta página não existe :/</p>
  </Layout>
)

export default NotFoundPage
