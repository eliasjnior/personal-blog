import React from 'react'

import ContentWrapper from '~/components/ContentWrapper'
import Layout from '~/components/Layout'
import PostContent from '~/components/PostContent'
import Seo from '~/components/Seo'

const Contact: React.FC = () => {
  return (
    <>
      <Seo title="Contact" />
      <Layout>
        <ContentWrapper>
          <PostContent>
            <h1>Contact</h1>
            <p>Soon this page will have a content ;)</p>
          </PostContent>
        </ContentWrapper>
      </Layout>
    </>
  )
}

export default Contact
