import React from 'react'

import ContentWrapper from '~/components/ContentWrapper'
import Layout from '~/components/Layout'
import Seo from '~/components/Seo'

const Contact: React.FC = () => {
  return (
    <>
      <Seo title="Contact" />
      <Layout>
        <ContentWrapper>
          <h1>Contact</h1>
        </ContentWrapper>
      </Layout>
    </>
  )
}

export default Contact
