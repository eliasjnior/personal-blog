import { darken } from 'polished'
import styled from 'styled-components'

const PostContent = styled.div`
  color: #333;
  font-weight: 300;
  line-height: 1.6rem;
  font-size: 1.1rem;

  p {
    margin-bottom: 15px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 20px;
    color: ${darken(0.1, '#5f8fcb')};
  }

  blockquote {
    border-left: 5px solid #ccc;
    padding-left: 15px;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-bottom: 15px;

    p:last-child {
      margin-bottom: 0;
    }
  }

  .gatsby-highlight {
    background-color: #fdf6e3;
    border-radius: 0.3em;
    margin: 0.5em 0;
    padding: 1em;
    overflow: auto;
  }

  .gatsby-highlight pre[class*='language-'].line-numbers {
    padding: 0;
    padding-left: 2.8em;
    overflow: initial;
  }
`

export default PostContent
