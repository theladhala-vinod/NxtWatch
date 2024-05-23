import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
`
export const VideosContainer = styled.div`
  width: 100%;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 768px) {
    padding: 16px;
  }
`
