import React, { useMemo } from 'react'

import { format } from 'date-fns'
import { PageProps, graphql } from 'gatsby'
import { Disqus } from 'gatsby-plugin-disqus'

import ContentWrapper from '~/components/ContentWrapper'
import Layout from '~/components/Layout'
import PostContent from '~/components/PostContent'
import Seo from '~/components/Seo'
import SocialShare from '~/components/SocialShare'

import { CommentsContainer, PostData, PostDetails, PostTitle } from './styles'

type DataType = {
  markdownRemark: {
    id: string
    timeToRead: number
    html: string
    frontmatter: {
      date: string
      title: string
      description: string
      slug: string
      thumbnail: {
        publicURL: string
        childImageSharp: {
          original: {
            width: number
            height: number
          }
        }
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

  const postUrl = useMemo(
    () =>
      `${process.env.GATSBY_APP_URI}/blog/post/${data.markdownRemark.frontmatter.slug}`,
    [data.markdownRemark.frontmatter.slug],
  )

  return (
    <>
      <Seo
        title={`${data.markdownRemark.frontmatter.title}`}
        description={data.markdownRemark.frontmatter.description}
        image={`${process.env.GATSBY_APP_URI}${data.markdownRemark.frontmatter.thumbnail.publicURL}`}
        imageWidth={
          data.markdownRemark.frontmatter.thumbnail.childImageSharp.original
            .width
        }
        imageHeight={
          data.markdownRemark.frontmatter.thumbnail.childImageSharp.original
            .height
        }
        url={postUrl}
      />
      <Layout>
        <ContentWrapper>
          <PostTitle>{data.markdownRemark.frontmatter.title}</PostTitle>
          <SocialShare url={postUrl} />
          <PostDetails>
            <PostData>
              <strong>Data da publicação:</strong> {formattedDate}
            </PostData>
            <PostData>
              <strong>Tempo de leitura:</strong>{' '}
              {data.markdownRemark.timeToRead} min
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
        description
        date
        slug
        thumbnail {
          publicURL
          childImageSharp {
            original {
              width
              height
            }
          }
        }
      }
    }
  }
`
