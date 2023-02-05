import styled from 'styled-components'

export const Container = styled.section`
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  margin-bottom: 4.5rem;

  background-color: ${(props) => props.theme.colors.bluishGray[700]};

  display: flex;
  gap: 2rem;

  & > img {
    width: 9.25rem;
    height: 9.25rem;

    border-radius: 8px;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & > main {
    flex: 1;
  }
`

export const InfoHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: ${(props) => props.theme.fontSizes['2xl']};
    color: ${(props) => props.theme.colors.bluishGray[50]};
  }

  a {
    text-transform: uppercase;
    text-decoration: none;
    color: ${(props) => props.theme.colors.brandBlue};
    font-size: ${(props) => props.theme.fontSizes.xs};
    font-weight: 700;
    line-height: 0;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    align-self: flex-start;
    border-bottom: 1px solid transparent;
    padding-bottom: 0.25rem;

    &:hover {
      border-bottom-color: ${(props) => props.theme.colors.brandBlue};
    }
  }

  svg {
    width: 0.75rem;
    height: 0.75rem;

    path {
      fill: ${(props) => props.theme.colors.brandBlue};
    }
  }
`

export const InfoFooter = styled.footer`
  ul {
    /* reset ul styles */
    list-style: none;
    padding: 0;
    margin: 0;

    display: flex;
    gap: 1.5rem;
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: ${(props) => props.theme.colors.bluishGray[100]};
  }

  svg {
    width: ${(props) => props.theme.fontSizes.lg};
    height: ${(props) => props.theme.fontSizes.lg};

    path {
      fill: ${(props) => props.theme.colors.bluishGray[400]};
    }
  }
`
