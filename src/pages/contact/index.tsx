import React from 'react'

import { Helmet } from 'react-helmet'

import ContentWrapper from '~/components/ContentWrapper'
import Layout from '~/components/Layout'

const Contact: React.FC = () => {
  return (
    <>
      <Helmet title={`Contact - Elias Júnior`} />
      <Layout>
        <ContentWrapper>
          <h1>Contact</h1>
        </ContentWrapper>
      </Layout>
    </>
  )
}

export default Contact
