import React from 'react'

import { PageProps, graphql } from 'gatsby'

import Layout from '~/components/Layout'

import { PostContent, PostData, PostDetails, PostTitle } from './styles'

type DataType = {
  markdownRemark: {
    timeToRead: number
    html: string
    frontmatter: {
      date: string
      title: string
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
      <PostTitle>{data.markdownRemark.frontmatter.title}</PostTitle>
      <PostDetails>
        <PostData>{data.markdownRemark.frontmatter.date}</PostData>
        <PostData>
          <strong>Read time:</strong> {data.markdownRemark.timeToRead} min
        </PostData>
      </PostDetails>
      <PostContent
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
      />
    </Layout>
  )
}

export default Post

export const pageQuery = graphql`
  query GetBlogPostBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      timeToRead
      html
      frontmatter {
        title
        date
      }
    }
  }
`
