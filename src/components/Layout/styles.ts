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
  padding: 50px;
`
