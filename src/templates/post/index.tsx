import React, { useMemo } from 'react'

import { format } from 'date-fns'
import { PageProps, graphql } from 'gatsby'
import { Disqus } from 'gatsby-plugin-disqus'

import ContentWrapper from '~/components/ContentWrapper'
import Layout from '~/components/Layout'
import PostContent from '~/components/PostContent'
import Seo from '~/components/Seo'

import { CommentsContainer, PostData, PostDetails, PostTitle } from './styles'

type DataType = {
  markdownRemark: {
    id: string
    timeToRead: number
    html: string
    frontmatter: {
      date: string
      title: string
      thumbnail: {
        publicURL: string
      }
    }
  }
}

type PageContext = {
  slug: string
  url: string
}

const Post: React.FC<PageProps<DataType, PageContext>> = ({
  data,
  pageContext,
}) => {
  const formattedDate = useMemo(
    () => format(new Date(data.markdownRemark.frontmatter.date), 'dd/MM/yyyy'),
    [data.markdownRemark.frontmatter.date],
  )

  const disqusConfig = {
    url: pageContext.url,
    identifier: data.markdownRemark.id,
    title: data.markdownRemark.frontmatter.title,
  }

  return (
    <>
      <Seo
        title={`${data.markdownRemark.frontmatter.title}`}
        meta={[
          {
            property: `og:image`,
            content: data.markdownRemark.frontmatter.thumbnail.publicURL,
          },
        ]}
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
          <CommentsContainer>
            <Disqus config={disqusConfig} />
          </CommentsContainer>
        </ContentWrapper>
      </Layout>
    </>
  )
}

export default Post

export const pageQuery = graphql`
  query GetBlogPostBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      timeToRead
      html
      frontmatter {
        title
        date
        thumbnail {
          publicURL
        }
      }
    }
  }
`
