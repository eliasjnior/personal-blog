import styled from 'styled-components'

export const PostWrapper = styled.section`
  max-width: 1000px;
  margin: 0 auto;
`

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

export const PostContent = styled.div`
  color: #333;
  font-weight: 300;
  line-height: 1.6rem;
  font-size: 1.1rem;

  p {
    margin-bottom: 15px;
  }
`
