import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'

type SeoProps = {
  lang?: string
  meta?: Array<any>
  description?: string
  title?: string
}

type Query = {
  site: {
    siteMetadata: {
      title: string
      description: string
      social: {
        linkedin: string
        github: string
        email: string
      }
    }
  }
}

const Seo: React.FC<SeoProps> = ({
  lang = 'pt-br',
  meta = [],
  description,
  title,
}) => {
  const { site } = useStaticQuery<Query>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              linkedin
              github
              email
            }
          }
        }
      }
    `,
  )

  const metaTitle = title || `Untitled`
  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={`%s - ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ].concat(meta)}
    />
  )
}

export default Seo
