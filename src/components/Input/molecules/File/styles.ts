import styled from 'styled-components'

export const ContainerFile = styled.label`
  padding: 1rem;
  border: 1px dashed #ccc;
  display: flex;
  justify-content: center;
  cursor: pointer;

  input {
    display: none;
  }

  .button-change-file {
    width: max-content;
    padding: 0.5rem;
  }
`
