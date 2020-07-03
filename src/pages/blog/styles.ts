import { Link } from 'gatsby'
import { darken } from 'polished'
import styled from 'styled-components'

export const PostList = styled.div``

export const Post = styled.div`
  display: flex;
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`

export const PostImage = styled.img`
  margin-right: 15px;
  user-drag: none;
  user-select: none;
  border-radius: 3px;
`

export const PostContent = styled.div``

export const PostTitle = styled.h1`
  font-size: 1.5em;
  font-weight: 500;
  margin-bottom: 10px;
  color: #333;

  a {
    display: inline-block;
    position: relative;

    &:after {
      content: '';
      width: 0;
      height: 2px;
      background-color: #333;
      position: absolute;
      left: 0;
      bottom: -5px;
      transition: all ease-in-out 0.2s;
      opacity: 0;
    }

    &:hover,
    &:focus {
      &:after {
        width: 100%;
        opacity: 1;
      }
    }
  }
`

export const PostDate = styled.p`
  font-size: 0.8rem;
  color: #8f8f8f;
  margin-bottom: 10px;
  font-weight: 300;
`

export const PostDescription = styled.p`
  color: #4f4f4f;
  font-weight: 300;
  margin-bottom: 10px;
`

export const PostLink = styled(Link)`
  color: #5f8fcb;
  transition: all linear 0.2s;

  &:hover,
  &:focus {
    color: ${darken(0.2, '#5f8fcb')};
  }
`

export const Pagination = styled.nav`
  display: flex;
  margin-top: 30px;
`

type PaginationLinkProps = {
  align: 'left' | 'right'
}

export const PaginationLink = styled.a<PaginationLinkProps>`
  margin-left: ${({ align }) => (align === 'left' ? '0' : 'auto')};
  background-color: #5f8fcb;
  color: #fff;
  font-weight: 400;
  width: calc(50% - 15px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  border-radius: 5px;
  transition: all linear 0.2s;

  &:hover,
  &:focus {
    opacity: 0.8;
  }

  svg {
    margin-right: ${({ align }) => (align === 'left' ? '15px' : '0')};
    margin-left: ${({ align }) => (align === 'left' ? '0' : '15px')};
  }
`
