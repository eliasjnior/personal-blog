import React from 'react'

import { Helmet } from 'react-helmet'

import Layout from '~/components/Layout'
const Contact: React.FC = () => {
  return (
    <>
      <Helmet title={`Contact - Elias Júnior`} />
      <Layout>
        <h1>Contact</h1>
      </Layout>
    </>
  )
}

export default Contact
