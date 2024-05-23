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
export const HomeVideosListItem = styled.li`
  list-style-type: none;
  width: 100%;
  @media screen and (min-width: 576px) {
    width: 50%;
    padding: 12px;
  }
  @media screen and (min-width: 768px) {
    min-width: 300px;
    width: 33%;
    padding: 8px;
  }
`

export const Thumbnail = styled.img`
  width: 100%;
`
export const VideoDetails = styled.div`
  display: flex;
  padding: 12px;
  margin-bottom: 24px;
`
export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 12px;
  @media screen and (min-width: 576px) {
    width: 30px;
    height: 30px;
    margin-right: 6px;
  }
`
export const VideoDescription = styled.div`
  //   display: flex;
`
export const VideoTitle = styled.p`
  color: #090909;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 12px;
`
export const VideoStats = styled.div`
  display: flex;
  @media screen and (min-width: 576px) {
    flex-direction: column;
  }
`

export const ChannelName = styled.p`
  font-size: 12px;
  margin-right: 12px;
  @media screen and (min-width: 576px) {
    font-size: 14px;
    margin-bottom: 6px;
  }
`

export const StatsAndDateDiv = styled.div`
  display: flex;
`

export const ViewsCount = styled.p`
  margin-right: 12px;
  font-size: 12px;
`

export const PublishedAt = styled.p`
  margin-right: 12px;
  font-size: 12px;
`
