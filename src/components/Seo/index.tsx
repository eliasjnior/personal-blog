import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'

type SeoProps = {
  lang?: string
  meta?: Array<any>
  description?: string
  title?: string
  url?: string
  image?: string
  imageWidth?: number
  imageHeight: number
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
  url,
  image,
  imageWidth,
  imageHeight,
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

  const metaUrl = url
    ? [
        {
          property: `og:url`,
          content: url,
        },
      ]
    : []

  const metaImage = image
    ? [
        {
          property: `og:image`,
          content: image,
        },
      ]
    : []

  const metaImageSizes =
    imageWidth && imageHeight
      ? [
          {
            property: `og:image:width`,
            content: imageWidth.toString(),
          },
          {
            property: `og:image:height`,
            content: imageHeight.toString(),
          },
        ]
      : []

  const linkCanonical = url
    ? [
        {
          rel: 'canonical',
          href: url,
        },
      ]
    : []

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={`%s - ${site.siteMetadata.title}`}
      link={[...linkCanonical]}
      meta={[
        {
          property: `og:site_name`,
          content: site.siteMetadata.title,
        },
        {
          property: `description`,
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
        ...metaUrl,
        ...metaImage,
        ...metaImageSizes,
        ...meta,
      ]}
    />
  )
}

export default Seo
