import React from 'react'

import { PageProps, graphql } from 'gatsby'

import Layout from '~/components/Layout'

type DataType = {
  markdownRemark: {
    id: string
    html: string
    frontmatter: {
      date: string
      title: string
      description: string
      slug: string
    }
  }
}

type PageContext = {
  slug: string
}

const Post: React.FC<PageProps<DataType, PageContext>> = ({
  data,
  pageContext,
}) => {
  return (
    <Layout>
      <h1>My post</h1>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </Layout>
  )
}

export default Post

export const pageQuery = graphql`
  query GetBlogPostBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date
        description
        slug
      }
    }
  }
`
