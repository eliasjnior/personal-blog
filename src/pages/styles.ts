import { darken } from 'polished'
import styled, { css } from 'styled-components'

export const Header = styled.header`
  background-color: #5f8fcb;
  color: #fff;
  max-width: 300px;
  min-height: 100vh;
  padding: 30px;
  position: fixed;
  top: 0;
  left: 0;
`

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 2rem;
`

export const Image = styled.img`
  max-width: 150px;
  display: block;
  margin: 0 auto 20px auto;
  border-radius: 50%;
  user-drag: none;
  user-select: none;
`

export const Presentation = styled.h2`
  text-align: center;
  font-weight: 300;
  font-size: 1rem;
  margin-bottom: 20px;
`

export const SocialList = styled.div`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  justify-content: center;
`

export const SocialLink = styled.a`
  color: #5f8fcb;
  background-color: #fff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px 5px 5px;
  transition: all linear 0.2s;

  &:hover,
  &:focus {
    opacity: 0.8;
  }
`

export const Separator = styled.hr`
  border-width: 1px 0 0 0;
  border-color: rgba(0, 0, 0, 0.1);
  margin: 0 0 20px 0;
`

export const Menu = styled.nav`
  display: flex;
  flex-direction: column;
`

type MenuLinkProps = {
  active?: boolean
}

export const MenuLink = styled.a<MenuLinkProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px 15px;
  border-radius: 5px;
  transition: all linear 0.2s;
  font-weight: 500;
  text-transform: uppercase;

  ${({ active }) =>
    active
      ? css`
          color: #30588a;
          font-weight: 600;
        `
      : css`
          &:hover,
          &:focus {
            background-color: rgba(255, 255, 255, 0.05);
          }
        `}
`

export const Content = styled.div`
  margin-left: 300px;
  padding: 30px;
`

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

export const PostLink = styled.a`
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
