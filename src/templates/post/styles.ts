import styled from 'styled-components'

export const PostTitle = styled.h1`
  font-weight: 400;
  text-align: center;
  margin-bottom: 10px;
  font-size: 2.3rem;
`

export const PostDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: #8f8f8f;
  margin-bottom: 30px;
  font-weight: 300;
  justify-content: center;
`

export const PostData = styled.div`
  &:not(:last-child) {
    margin-right: 15px;
    &:after {
      content: '●';
      margin-left: 15px;
    }
  }
`
