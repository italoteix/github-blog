import styled from 'styled-components'

export const Container = styled.li`
  background: ${(props) => props.theme.colors.bluishGray[600]};

  border-radius: 10px;
  padding: 2rem;
`

export const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  margin-bottom: 1.25rem;

  h3 {
    color: ${(props) => props.theme.colors.bluishGray[50]};
    font-size: ${(props) => props.theme.fontSizes.xl};
  }

  span {
    color: ${(props) => props.theme.colors.bluishGray[300]};
    font-size: ${(props) => props.theme.fontSizes.sm};
    flex-shrink: 0;
  }
`
