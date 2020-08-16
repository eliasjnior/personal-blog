import { Link } from 'gatsby'
import { darken } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`

export const PostImageContainer = styled.div`
  margin-right: 15px;
`

export const PostImage = styled.img`
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
