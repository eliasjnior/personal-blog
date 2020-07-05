import React, { useMemo } from 'react'

import { format } from 'date-fns'
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
  const formattedDate = useMemo(
    () => format(new Date(data.markdownRemark.frontmatter.date), 'dd/MM/yyyy'),
    [data.markdownRemark.frontmatter.date],
  )

  return (
    <Layout>
      <PostTitle>{data.markdownRemark.frontmatter.title}</PostTitle>
      <PostDetails>
        <PostData>
          <strong>Publish date:</strong> {formattedDate}
        </PostData>
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
