import React from 'react'

import { withPrefix } from 'gatsby'

import ContentWrapper from '~/components/ContentWrapper'
import Layout from '~/components/Layout'
import PostContent from '~/components/PostContent'
import Seo from '~/components/Seo'

const NotFoundPage: React.FC = () => (
  <Layout>
    <Seo title="Not found" />
    <ContentWrapper>
      <PostContent>
        <img
          style={{
            width: 400,
            maxWidth: '100%',
            marginBottom: 20,
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'block',
          }}
          src={withPrefix('/404-not-found.svg')}
          alt="Not found"
        />
        <h1 style={{ textAlign: 'center' }}>Page not found</h1>
        <p style={{ textAlign: 'center' }}>
          Sorry, but the page you're looking for does not exists.
        </p>
      </PostContent>
    </ContentWrapper>
  </Layout>
)

export default NotFoundPage
