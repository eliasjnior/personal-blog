import styled, { css } from 'styled-components'

interface MessageProps {
  status: 'success' | 'error' | 'pending' | 'loading'
}

export const Message = styled.div<MessageProps>`
  margin-top: 20px;
  max-width: 500px;
  padding: 10px;
  border-radius: 5px;

  ${({ status }) =>
    status === 'success' &&
    css`
      background-color: green;
      color: #fff;
    `}

  ${({ status }) =>
    status === 'error' &&
    css`
      background-color: red;
      color: #fff;
    `}
`
