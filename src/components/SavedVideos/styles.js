import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
`
export const VideosContainer = styled.div`
  background-color: ${props => props.bgColor};
  width: 100%;
  @media screen and (min-width: 768px) {
    padding: 16px;
  }
`
export const NoSavedVideosDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
`

export const NoSavedVideosImage = styled.img`
  width: 50%;
  max-width: 500px;
`
