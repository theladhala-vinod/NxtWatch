import {
  HomeVideosListItem,
  Thumbnail,
  VideoDetails,
  VideoDescription,
  ChannelName,
  StatsAndDateDiv,
  VideoTitle,
  VideoStats,
  ViewsCount,
  PublishedAt,
} from './styles'

const SavedVideoCard = props => {
  const {videoData} = props
  console.log(videoData)
  return (
    <HomeVideosListItem>
      <Thumbnail src={videoData.thumbnailUrl} alt="video thumbnail" />
      <VideoDetails>
        <VideoDescription>
          <VideoTitle>{videoData.title}</VideoTitle>
          <VideoStats>
            <ChannelName>{videoData.channel.name}</ChannelName>
            <StatsAndDateDiv>
              <ViewsCount>{`${videoData.viewCount} views `}</ViewsCount>
              <PublishedAt>{videoData.publishedAt}</PublishedAt>
            </StatsAndDateDiv>
          </VideoStats>
        </VideoDescription>
      </VideoDetails>
    </HomeVideosListItem>
  )
}

export default SavedVideoCard
