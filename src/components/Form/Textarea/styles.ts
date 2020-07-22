import styled from 'styled-components'

export const CustomTextarea = styled.textarea`
  width: 100%;
  max-width: 500px;
  border-radius: 0;
  border: 1px solid #ccc;
  font-size: 1.1rem;
  padding: 10px;
  font-weight: 300;
  resize: none;
  transition: all linear 0.2s;

  &:not(:disabled) {
    &:focus {
      border-color: #5f8fcb;
    }
  }
`
