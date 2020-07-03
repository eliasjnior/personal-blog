import React, { useMemo } from 'react'

import { Link, PageProps, graphql, useStaticQuery } from 'gatsby'

import Layout from '~/components/Layout'
import SEO from '~/components/SEO'

interface Post {
  id: string
  title: string
  date: string
  slug: string
}

const Blog: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "DD/MM/YYYY")
              slug
            }
          }
        }
      }
    }
  `)

  const posts: Post[] = useMemo(
    () =>
      data.allMarkdownRemark.edges.map((item: any) => ({
        id: item.node.id,
        date: item.node.frontmatter.date,
        title: item.node.frontmatter.title,
        slug: item.node.frontmatter.slug,
      })),
    [data.allMarkdownRemark.edges],
  )

  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link> - {post.date}
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default Blog
