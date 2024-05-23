import styled from 'styled-components'
import {Link} from 'react-router-dom'

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
export const HomeVideosContainer = styled.div`
  background-color: #f1f5f9;
  width: 100%;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 576px) {
  }
`
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  @media screen and (min-width: 576px) {
    width: 400px;
  }
`

export const SearchInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  height: 30px;
  border: 1px solid grey;
  padding: 8px;
`

export const LoaderContainer = styled.div`
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SearchIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 30px;
  border: 1px solid grey;
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
export const VideoLink = styled(Link)`
  text-decoration: none;
  color: #090909;
`
