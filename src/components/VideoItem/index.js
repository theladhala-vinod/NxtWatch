import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike,
} from 'react-icons/ai'
import {CgPlayListAdd} from 'react-icons/cg'

import Header from '../Header'
import Sidebar from '../Sidebar'

import AppContext from '../../AppContext'

import {
  MainContainer,
  VideosContainer,
  LoaderContainer,
  NoSearchResults,
  NoResultsImage,
  Result,
  Suggestion,
  RetryButton,
  ReactPlayerDiv,
  VideoDetails,
  ResponsiveDiv,
  ViewsAndDateDiv,
  ButtonsDiv,
  ChannelLogo,
  HorizontalRule,
  ChannelDetails,
  NameAndSubscribersCountDiv,
  VideoTitle,
  Views,
  Dated,
  Button,
  ButtonText,
  ChannelName,
  SubscribersCount,
  VideoDescription,
} from './styles'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItem extends Component {
  state = {
    videoItemDetails: [],
    apiStatus: apiStatusConstants.initial,
    isLiked: false,
    isDisliked: false,
    isSaved: false,
  }

  componentDidMount() {
    this.getVideoItemData()
  }

  getVideoItemData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const fetchedData = data.video_details
      const formattedData = {
        channel: {
          name: fetchedData.channel.name,
          profileImageUrl: fetchedData.channel.profile_image_url,
          subscriberCount: fetchedData.channel.subscriber_count,
        },
        id: fetchedData.id,
        description: fetchedData.description,
        publishedAt: fetchedData.published_at,
        thumbnailUrl: fetchedData.thumbnail_url,
        title: fetchedData.title,
        viewCount: fetchedData.view_count,
        videoUrl: fetchedData.video_url,
      }
      this.setState({
        videoItemDetails: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    }
    if (!response.ok) {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#090909" height="50" width="100" />
    </LoaderContainer>
  )

  renderFailureView = () => {
    const isDarkMode = false
    const imgUrl = isDarkMode
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
    return (
      <NoSearchResults>
        <NoResultsImage src={imgUrl} alt="failure view" />
        <Result>Oops! Something Went Wrong</Result>
        <Suggestion>
          We are having some trouble to complete your request. Please try again.
        </Suggestion>
        <RetryButton type="button" onClick={this.getVideoItemData}>
          Retry
        </RetryButton>
      </NoSearchResults>
    )
  }

  renderSuccessView = () => {
    const {videoItemDetails, isLiked, isDisliked, isSaved} = this.state
    const {
      id,
      videoUrl,
      title,
      viewCount,
      publishedAt,
      description,
      channel,
    } = videoItemDetails
    const {profileImageUrl, name, subscriberCount} = channel
    return (
      <AppContext.Consumer>
        {value => {
          const {
            isDarkMode,
            addToSavedVideosList,
            removeFromSavedVideosList,
            savedVideosList,
          } = value

          console.log(savedVideosList)
          const bgColor = isDarkMode ? '#0f0f0f' : '#ffffff'
          const textColor = isDarkMode ? '#ffffff' : '#0f0f0f'

          const likeIcon = !isLiked ? (
            <AiOutlineLike fontSize={20} />
          ) : (
            <AiFillLike fontSize={20} />
          )

          const dislikeIcon = !isDisliked ? (
            <AiOutlineDislike fontSize={20} />
          ) : (
            <AiFillDislike fontSize={20} />
          )

          const addOrRemoveVideoItem = () => {
            if (isSaved === true) {
              removeFromSavedVideosList(id)
            } else {
              addToSavedVideosList(videoItemDetails)
            }
          }

          const onClickLikeButton = () => {
            this.setState(prevState => ({
              isLiked: !prevState.isLiked,
              isDisliked: false,
            }))
          }

          const onClickDislikeButton = () => {
            this.setState(prevState => ({
              isDisliked: !prevState.isDisliked,
              isLiked: false,
            }))
          }

          const onClickSaveButton = () => {
            this.setState(prevState => ({
              isSaved: !prevState.isSaved,
            }))
            addOrRemoveVideoItem()
          }

          return (
            <>
              <Header />
              <MainContainer>
                <Sidebar />
                <VideosContainer
                  data-testid="videoItemDetails"
                  bgColor={bgColor}
                >
                  <ReactPlayerDiv>
                    <ReactPlayer
                      url={videoUrl}
                      controls
                      width="100%"
                      height="100%"
                    />
                  </ReactPlayerDiv>

                  <VideoDetails>
                    <VideoTitle textColor={textColor}>{title}</VideoTitle>
                    <ResponsiveDiv>
                      <ViewsAndDateDiv>
                        <Views>{`${viewCount} Views`}</Views>
                        <Dated>{publishedAt}</Dated>
                      </ViewsAndDateDiv>
                      <ButtonsDiv>
                        <Button
                          type="button"
                          onClick={onClickLikeButton}
                          color={isLiked ? '#2563eb' : '#64748b'}
                        >
                          {likeIcon}
                          <ButtonText>Like</ButtonText>
                        </Button>
                        <Button
                          type="button"
                          onClick={onClickDislikeButton}
                          color={isDisliked ? '#2563eb' : '#64748b'}
                        >
                          {dislikeIcon}
                          <ButtonText>Dislike</ButtonText>
                        </Button>
                        <Button
                          type="button"
                          onClick={onClickSaveButton}
                          color={isSaved ? '#2563eb' : '#64748b'}
                        >
                          <CgPlayListAdd fontSize={20} />
                          <ButtonText>{isSaved ? 'Saved' : 'Save'}</ButtonText>
                        </Button>
                      </ButtonsDiv>
                    </ResponsiveDiv>
                    <HorizontalRule />
                    <ChannelDetails>
                      <ChannelLogo src={profileImageUrl} alt="channel logo" />
                      <NameAndSubscribersCountDiv>
                        <ChannelName textColor={textColor}>{name}</ChannelName>
                        <SubscribersCount>{`${subscriberCount} subscribers`}</SubscribersCount>
                      </NameAndSubscribersCountDiv>
                    </ChannelDetails>
                    <VideoDescription textColor={textColor}>
                      {description}
                    </VideoDescription>
                  </VideoDetails>
                </VideosContainer>
              </MainContainer>
            </>
          )
        }}
      </AppContext.Consumer>
    )
  }

  renderVideoItemPage = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      const {history} = this.props
      history.replace('/login')
    }
    return this.renderVideoItemPage()
  }
}

export default VideoItem
