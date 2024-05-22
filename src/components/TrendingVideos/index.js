import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import TrendingVideoCard from '../TrendingVideoCard'
import {
  HomeVideosContainer,
  HomeVideosList,
  LoaderContainer,
  NoSearchResults,
  NoResultsImage,
  Result,
  Suggestion,
  RetryButton,
} from './styles'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class TrendingVideos extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    trendingVideosList: [],
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/trending`
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
        channel: {
          name: eachVideo.channel.name,
          profileImageUrl: eachVideo.channel.profile_image_url,
        },
        publishedAt: eachVideo.published_at,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        trendingVideosList: formattedVideosData,
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

  renderTrendingVideosList = () => {
    const {trendingVideosList} = this.state

    return (
      <HomeVideosList>
        {trendingVideosList.map(eachVideo => (
          <TrendingVideoCard key={eachVideo.id} videoData={eachVideo} />
        ))}
      </HomeVideosList>
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
        <Suggestion>completing your request. Please try again.</Suggestion>
        <RetryButton type="button" onClick={this.getTrendingVideos}>
          Retry
        </RetryButton>
      </NoSearchResults>
    )
  }

  renderTrendingVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case 'IN_PROGRESS':
        return this.renderLoadingView()
      case 'SUCCESS':
        return this.renderTrendingVideosList()
      case 'FAILURE':
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <HomeVideosContainer data-testid="home">
        {this.renderTrendingVideos()}
      </HomeVideosContainer>
    )
  }
}

export default TrendingVideos
