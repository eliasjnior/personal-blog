import { Link } from 'gatsby'
import styled from 'styled-components'

export const PostList = styled.div``

export const Pagination = styled.nav`
  display: flex;
  margin-top: 30px;
`

type PaginationLinkProps = {
  align: 'left' | 'right'
}

export const PaginationLink = styled(Link)<PaginationLinkProps>`
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
