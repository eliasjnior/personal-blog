import styled from 'styled-components'

export const CustomButton = styled.button`
  padding: 10px 25px;
  border-radius: 3px;
  border: 1px solid;
  border-color: #5f8fcb;
  background-color: #5f8fcb;
  color: #fff;
  font-size: 1.1rem;
  transition: all linear 0.2s;

  &:not(:disabled) {
    &:hover {
      opacity: 0.8;
    }
  }

  &:disabled {
    cursor: not-allowed;
  }
`
