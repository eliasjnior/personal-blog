const path = require('path')
const dotenv = require('dotenv')

dotenv.config()

module.exports = {
  pathPrefix: process.env.PATH_PREFIX || '',
  siteMetadata: {
    title: `Elias Júnior`,
    description: `I'm a software engineer specialized in frontend and backend development for complex scalable web apps. I write about software development on my blog.`,
    author: `@eliasjnior`,
    siteUrl: `http://example.com`,
    social: {
      linkedin: `https://www.linkedin.com/in/eliasjnior`,
      github: `http://github.com/eliasjnior`,
      email: `me@eliasjr.dev`,
    }
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        head: true,
        defer: true,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: process.env.DISQUS_SHORTNAME
      }
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "~": path.resolve(__dirname, 'src'),
        },
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              linkImagesToOriginal: false,
            },
          },
          `gatsby-remark-images-zoom`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `roboto\:300,400,500,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sitemap',
  ],
}
