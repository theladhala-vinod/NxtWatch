import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  min-height: 95vh;
`
export const VideosContainer = styled.div`
  background-color: ${props => props.bgColor};
  width: 100%;
  padding-top: 16px;
  @media screen and (min-width: 768px) {
    padding: 16px;
  }
`

export const HomeVideosContainer = styled.div`
  background-color: #f1f5f9;
  width: 100%;
  @media screen and (min-width: 576px) {
  }
`

export const LoaderContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HomeVideosList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

export const NoSearchResults = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 500px;
  background-color: ;
  padding: 16px;
`

export const NoResultsImage = styled.img`
  width: 200px;
  margin-bottom: 32px;
`

export const Result = styled.h2`
  color: ;
  font-size: 18px;
  margin-bottom: 16px;
`

export const Suggestion = styled.p`
  color: ;
  margin-bottom: 16px;
`

export const RetryButton = styled.button`
border:none;
outline: none;
border-radius: 6px;
cursor: pointer;
background-color: violet;
color: #ffffff;
font-size; 14px;
width: 80px;
height: 30px;
`

export const ReactPlayerDiv = styled.div`
  width: 100%;
  height: 40%;
  @media screen and (min-width: 576px) {
    height: 50%;
  }
  @media screen and (min-width: 768px) {
    height: 60%;
  }
`

export const VideoDetails = styled.div`
  padding: 16px;
`
export const VideoTitle = styled.p`
  font-weight: 500;
  margin-bottom: 24px;
  color: ${props => props.textColor};
`

export const ResponsiveDiv = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const ViewsAndDateDiv = styled.div`
  display: flex;
  align-items: center;
  color: #606060;
  margin-bottom: 16px;
  font-size: 14px;
  @media screen and (min-width: 768px) {
    margin: 0;
  }
`

export const Views = styled.p`
  margin-right: 16px;
`

export const Dated = styled.p`
  margin-right: 16px;
`

export const ButtonsDiv = styled.div`
  display: flex;
  align-items: center;
`

export const Button = styled.button`
  border: none;
  outline: none;
  color: #606060;
  background-color: transparent;
  width: 80px;
  padding: 8px 0;
  margin-right: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${props => props.color};
`
export const ButtonText = styled.p`
  margin-left: 4px;
`

export const HorizontalRule = styled.hr`
  margin: 24px 0;
`

export const ChannelDetails = styled.div`
  display: flex;
  margin-bottom: 16px;
`

export const ChannelLogo = styled.img`
  width: 50px;
  height: 50px;
`
export const NameAndSubscribersCountDiv = styled.div`
  margin-left: 16px;
`

export const ChannelName = styled.p`
  margin-bottom: 8px;
  font-weight: 500;
  color: ${props => props.textColor};
`
export const SubscribersCount = styled.p`
  font-size: 12px;
  color: #606060;
`

export const VideoDescription = styled.p`
  font-size: 14px;
  color: ${props => props.textColor};
`
