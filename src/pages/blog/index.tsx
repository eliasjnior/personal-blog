import React from 'react'

import { Link, PageProps, graphql } from 'gatsby'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

import Layout from '~/components/Layout'

import {
  Pagination,
  PaginationLink,
  Post,
  PostContent,
  PostDate,
  PostDescription,
  PostImage,
  PostLink,
  PostList,
  PostTitle,
} from './styles'

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

const Blog: React.FC<PageProps<DataType>> = ({ data }) => {
  return (
    <Layout>
      <PostList>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Post key={node.id}>
            <PostImage src="https://via.placeholder.com/150x150" />
            <PostContent>
              <PostTitle>
                <Link to={`/blog/post/${node.frontmatter.slug}`}>
                  {node.frontmatter.title}
                </Link>
              </PostTitle>
              <PostDate>{node.frontmatter.date}</PostDate>
              {node.frontmatter.description && (
                <PostDescription>
                  {node.frontmatter.description}
                </PostDescription>
              )}
              <PostLink to={`/blog/post/${node.frontmatter.slug}`}>
                Read more →
              </PostLink>
            </PostContent>
          </Post>
        ))}
      </PostList>
      <Pagination>
        <PaginationLink align="left">
          <AiOutlineArrowLeft size={25} /> Previous
        </PaginationLink>
        <PaginationLink align="right">
          Next <AiOutlineArrowRight size={25} />
        </PaginationLink>
      </Pagination>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  {
    allMarkdownRemark {
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
