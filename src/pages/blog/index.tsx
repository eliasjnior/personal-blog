import React from 'react'

import { Link, PageProps, graphql } from 'gatsby'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

import BlogPost from '~/components/BlogPost'
import Layout from '~/components/Layout'

import { Pagination, PaginationLink, PostList } from './_styles'

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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
