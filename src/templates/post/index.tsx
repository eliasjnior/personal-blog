import React from 'react'

import { PageProps, graphql } from 'gatsby'

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
  console.log(data)

  return (
    <div>
      <h1>My post</h1>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </div>
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
