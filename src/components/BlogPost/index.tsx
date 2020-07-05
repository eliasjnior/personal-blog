import React, { useMemo } from 'react'

import { format } from 'date-fns'
import { Link } from 'gatsby'

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
}

const BlogPost: React.FC<BlogPostProps> = ({
  link,
  date,
  title,
  description,
}) => {
  const formattedDate = useMemo(() => format(new Date(date), 'dd/MM/yyyy'), [
    date,
  ])

  return (
    <Container>
      <PostImage src="https://via.placeholder.com/150x150" />
      <PostContent>
        <PostTitle>
          <Link to={link}>{title}</Link>
        </PostTitle>
        <PostDate>{formattedDate}</PostDate>
        {description && <PostDescription>{description}</PostDescription>}
        <PostLink to={link}>Read more →</PostLink>
      </PostContent>
    </Container>
  )
}

export default BlogPost
