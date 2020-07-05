import React from 'react'

import { PostContent } from '~/components/BlogPost/styles'
import ContentWrapper from '~/components/ContentWrapper'
import Layout from '~/components/Layout'
import Seo from '~/components/Seo'

const NotFoundPage: React.FC = () => (
  <Layout>
    <Seo title="Not found" />
    <ContentWrapper>
      <PostContent>
        <h1>Page not found</h1>
        <p>Esta página não existe :/</p>
      </PostContent>
    </ContentWrapper>
  </Layout>
)

export default NotFoundPage
