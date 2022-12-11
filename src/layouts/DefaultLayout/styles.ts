import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;

  background-color: ${(props) => props.theme['gray-800']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1366px) {
    max-width: 62rem;
    height: calc(100vh - 6rem);
    margin: 3rem auto;
  }

  @media screen and (max-width: 1024px) {
    height: calc(100vh - 6rem);
    margin: 3rem 2rem;
    padding: 1.25rem;
  }
`
