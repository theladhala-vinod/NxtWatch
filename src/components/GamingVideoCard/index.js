import {
  HomeVideosListItem,
  Thumbnail,
  VideoDetails,
  VideoDescription,
  VideoTitle,
  VideoStats,
  ViewsCount,
} from './styles'

const GamingVideoCard = props => {
  const {videoData} = props
  return (
    <HomeVideosListItem>
      <Thumbnail src={videoData.thumbnailUrl} alt="video thumbnail" />
      <VideoDetails>
        <VideoDescription>
          <VideoTitle>{videoData.title}</VideoTitle>
          <VideoStats>
            <ViewsCount>{`${videoData.viewCount} Watching Worldwide `}</ViewsCount>
          </VideoStats>
        </VideoDescription>
      </VideoDetails>
    </HomeVideosListItem>
  )
}

export default GamingVideoCard
