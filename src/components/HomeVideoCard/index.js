import {
  HomeVideosListItem,
  VideoLink,
  Thumbnail,
  VideoDetails,
  ProfileImage,
  VideoDescription,
  VideoTitle,
  VideoStats,
  ChannelName,
  StatsAndDateDiv,
  ViewsCount,
  PublishedAt,
} from './styles'

const HomeVideoCard = props => {
  const {videoData} = props
  return (
    <HomeVideosListItem>
      <VideoLink to={`/videos/${videoData.id}`}>
        <Thumbnail src={videoData.thumbnailUrl} alt="video thumbnail" />
        <VideoDetails>
          <ProfileImage
            src={videoData.channel.profileImageUrl}
            alt="channel logo"
          />
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
      </VideoLink>
    </HomeVideosListItem>
  )
}

export default HomeVideoCard
