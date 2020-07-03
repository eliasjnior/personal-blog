const path = require('path')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const result = await graphql(`
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

  if(result.errors) {
    console.error(result.errors)
  }

  result.data.allMarkdownRemark.edges.forEach(({node}) => {
    createPage({
      path: `blog/${node.frontmatter.slug}`,
      component: path.resolve('src/templates/post/index.tsx'),
      context: {
        slug: node.frontmatter.slug,
      },
    })
  });
}
