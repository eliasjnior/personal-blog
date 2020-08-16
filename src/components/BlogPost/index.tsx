import React, { useMemo } from 'react'

import { format } from 'date-fns'
import { Link, withPrefix } from 'gatsby'

import {
  Container,
  PostContent,
  PostDate,
  PostDescription,
  PostImage,
  PostLink,
  PostTitle,
} from './styles'

type BlogPostProps = {
  link: string
  title: string
  description?: string
  date: string
  thumbnail?: string
}

const BlogPost: React.FC<BlogPostProps> = ({
  link,
  date,
  title,
  description,
  thumbnail,
}) => {
  const formattedDate = useMemo(() => format(new Date(date), 'dd/MM/yyyy'), [
    date,
  ])

  return (
    <Container>
      <PostImage src={thumbnail || withPrefix('/post-placeholder.png')} />
      <PostContent>
        <PostTitle>
          <Link to={link}>{title}</Link>
        </PostTitle>
        <PostDate>{formattedDate}</PostDate>
        {description && <PostDescription>{description}</PostDescription>}
        <PostLink to={link}>Continue lendo →</PostLink>
      </PostContent>
    </Container>
  )
}

export default BlogPost
