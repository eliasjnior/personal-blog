import React from 'react'

import { Helmet } from 'react-helmet'

import Layout from '~/components/Layout'
const AboutMe: React.FC = () => {
  return (
    <>
      <Helmet title={`About me - Elias Júnior`} />
      <Layout>
        <h1>About me</h1>
      </Layout>
    </>
  )
}

export default AboutMe
