import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import Sidebar from '../Sidebar'
import AppContext from '../../AppContext'
import {
  MainContainer,
  VideosContainer,
  HomeVideosContainer,
  HomeVideosList,
  LoaderContainer,
  NoSearchResults,
  NoResultsImage,
  Result,
  Suggestion,
  RetryButton,
  HomeVideosListItem,
  VideoLink,
  Thumbnail,
  VideoDetails,
  VideoDescription,
  VideoTitle,
  VideoStats,
  ViewsCount,
} from './styles'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    gamingVideosList: [],
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/gaming`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const data = await response.json()
      const formattedVideosData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        gamingVideosList: formattedVideosData,
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

  renderGamingVideosList = () => {
    const {gamingVideosList} = this.state

    return (
      <AppContext.Consumer>
        {value => {
          const {isDarkMode} = value
          const bgColor = isDarkMode ? '#0f0f0f' : '#ffffff'
          return (
            <HomeVideosList data-testid="gaming" bgColor={bgColor}>
              {gamingVideosList.map(eachVideo => (
                <HomeVideosListItem key={eachVideo.id}>
                  <VideoLink to={`/videos/${eachVideo.id}`}>
                    <Thumbnail
                      src={eachVideo.thumbnailUrl}
                      alt="video thumbnail"
                    />
                    <VideoDetails>
                      <VideoDescription>
                        <VideoTitle>{eachVideo.title}</VideoTitle>
                        <VideoStats>
                          <ViewsCount>{`${eachVideo.viewCount} Watching Worldwide `}</ViewsCount>
                        </VideoStats>
                      </VideoDescription>
                    </VideoDetails>
                  </VideoLink>
                </HomeVideosListItem>
              ))}
            </HomeVideosList>
          )
        }}
      </AppContext.Consumer>
    )
  }

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
          We are having some trouble completing your request. Please try again.
        </Suggestion>
        <RetryButton type="button" onClick={this.getGamingVideos}>
          Retry
        </RetryButton>
      </NoSearchResults>
    )
  }

  renderGamingVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case 'IN_PROGRESS':
        return this.renderLoadingView()
      case 'SUCCESS':
        return this.renderGamingVideosList()
      case 'FAILURE':
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
    return (
      <AppContext.Consumer>
        {value => {
          const {isDarkMode} = value
          const bgColor = isDarkMode ? '#0f0f0f' : '#ffffff'

          return (
            <>
              <Header />
              <MainContainer>
                <Sidebar />
                <VideosContainer data-testid="gaming" bgColor={bgColor}>
                  <h2>Gaming</h2>
                  <HomeVideosContainer>
                    {this.renderGamingVideos()}
                  </HomeVideosContainer>
                </VideosContainer>
              </MainContainer>
            </>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Gaming
