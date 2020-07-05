import React from 'react'

import { PageProps, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

import BlogPost from '~/components/BlogPost'
import Layout from '~/components/Layout'

import { Pagination, PaginationLink, PostList } from './styles'

type DataType = {
  allMarkdownRemark: {
    edges: Array<{
      node: {
        id: string
        frontmatter: {
          title: string
          date: string
          description: string | null
          slug: string
        }
      }
    }>
  }
}

type PageContext = {
  page: number
  postsPerPage: number
  totalResults: number
  previousPath: string
  nextPath: string
  start: number
  end: number
}

const Blog: React.FC<PageProps<DataType, PageContext>> = ({
  data,
  pageContext,
}) => {
  return (
    <>
      <Helmet title={`Blog - Página ${pageContext.page} - Elias Júnior`} />
      <Layout>
        <PostList>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <BlogPost
              key={node.id}
              title={node.frontmatter.title}
              link={`/blog/post/${node.frontmatter.slug}`}
              description={node.frontmatter.description || undefined}
              date={node.frontmatter.date}
            />
          ))}
        </PostList>
        <Pagination>
          {pageContext.previousPath && (
            <PaginationLink to={pageContext.previousPath} align="left">
              <AiOutlineArrowLeft size={25} /> Previous
            </PaginationLink>
          )}
          {pageContext.nextPath && (
            <PaginationLink to={pageContext.nextPath} align="right">
              Next <AiOutlineArrowRight size={25} />
            </PaginationLink>
          )}
        </Pagination>
      </Layout>
    </>
  )
}

export default Blog

export const pageQuery = graphql`
  query GetBlogPosts($start: Int!, $postsPerPage: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $postsPerPage
      skip: $start
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            description
            slug
          }
        }
      }
    }
  }
`
