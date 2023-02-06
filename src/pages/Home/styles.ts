import styled from 'styled-components'

export const PostsHeader = styled.header`
  margin-bottom: 3rem;

  div {
    display: flex;
    justify-content: space-between;

    margin-bottom: 0.75rem;

    span {
      font-size: ${(props) => props.theme.fontSizes.sm};
      color: ${(props) => props.theme.colors.bluishGray[300]};
    }
  }

  h2 {
    font-size: ${(props) => props.theme.fontSizes.lg};
    color: ${(props) => props.theme.colors.bluishGray[100]};
  }
`

export const SearchInput = styled.input`
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.bluishGray[500]};
  border-radius: 6px;
  padding: 0.75rem 1rem;

  background-color: ${(props) => props.theme.colors.bluishGray[900]};

  color: ${(props) => props.theme.colors.bluishGray[200]};

  &::placeholder {
    color: ${(props) => props.theme.colors.bluishGray[400]};
  }

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.brandBlue};
  }
`

export const PostsContainer = styled.ul`
  /* reset ul styles */
  list-style: none;
  padding: 0;
  margin: 0;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`
