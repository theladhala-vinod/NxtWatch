import {formatDistanceToNow} from 'date-fns'
import {
  HomeVideosListItem,
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
      <Thumbnail src={videoData.thumbnailUrl} alt="thumbnail" />
      <VideoDetails>
        <ProfileImage src={videoData.channel.profileImageUrl} alt="profile" />
        <VideoDescription>
          <VideoTitle>{videoData.title}</VideoTitle>
          <VideoStats>
            <ChannelName>{videoData.channel.name}</ChannelName>
            <StatsAndDateDiv>
              <ViewsCount>{`${videoData.viewCount} views `}</ViewsCount>
              <PublishedAt>
                {formatDistanceToNow(new Date(videoData.publishedAt))}
              </PublishedAt>
            </StatsAndDateDiv>
          </VideoStats>
        </VideoDescription>
      </VideoDetails>
    </HomeVideosListItem>
  )
}

export default HomeVideoCard
