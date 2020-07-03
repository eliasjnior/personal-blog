import React from 'react'

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

import Layout from '~/components/Layout'

import {
  Pagination,
  PaginationLink,
  Post,
  PostContent,
  PostDate,
  PostDescription,
  PostImage,
  PostLink,
  PostList,
  PostTitle,
} from './styles'

const Blog: React.FC = () => {
  return (
    <Layout>
      <PostList>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((post) => (
          <Post key={post.toString()}>
            <PostImage src="https://via.placeholder.com/150x150" />
            <PostContent>
              <PostTitle>
                <a href="#">Why Every Developer Should Have A Blog</a>
              </PostTitle>
              <PostDate>Published 2 days ago</PostDate>
              <PostDescription>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies...
              </PostDescription>
              <PostLink href="#">Read more →</PostLink>
            </PostContent>
          </Post>
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
