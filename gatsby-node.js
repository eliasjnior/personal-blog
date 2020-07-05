const path = require('path')

const dotenv = require('dotenv')

dotenv.config()

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
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
  `)

  if(result.errors) {
    console.error(result.errors)
  }

  const postsPerPage = 10
  const totalResults = result.data.allMarkdownRemark.edges.length
  const totalPages = Math.ceil(totalResults / postsPerPage)
  const blogTemplate = path.resolve('src/templates/blog/index.tsx')

  // Create post pagination.
  for(let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
    const path = pageNumber === 1 ? `blog` : `blog/${pageNumber}`
    const context = {
      page: pageNumber,
      postsPerPage,
      totalResults,
      previousPath: pageNumber === 1 ? null : pageNumber === 2 ? `blog` : `blog/${pageNumber - 1}`,
      nextPath: pageNumber === totalPages ? null : `blog/${pageNumber + 1}`,
      start: (pageNumber - 1) * postsPerPage,
      end: Math.min(totalResults, pageNumber * postsPerPage),
    }

    createPage({
      path,
      component: blogTemplate,
      context,
    })
  }

  // Create each post page.
  result.data.allMarkdownRemark.edges.forEach(({node}) => {
    createPage({
      path: `blog/post/${node.frontmatter.slug}`,
      component: path.resolve('src/templates/post/index.tsx'),
      context: {
        slug: node.frontmatter.slug,
        url: `${process.env.APP_URI}/blog/post/${node.frontmatter.slug}`,
      },
    })
  });
}
