import React, { useMemo } from 'react'

import { format } from 'date-fns'
import { PageProps, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import ContentWrapper from '~/components/ContentWrapper'
import Layout from '~/components/Layout'
import PostContent from '~/components/PostContent'

import { PostData, PostDetails, PostTitle } from './styles'

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
    <>
      <Helmet
        title={`${data.markdownRemark.frontmatter.title} - Elias Júnior`}
      />
      <Layout>
        <ContentWrapper>
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
        </ContentWrapper>
      </Layout>
    </>
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
