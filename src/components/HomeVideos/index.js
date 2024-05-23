import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {IoSearch} from 'react-icons/io5'
import HomeVideoCard from '../HomeVideoCard'
import {
  HomeVideosContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
  HomeVideosList,
  LoaderContainer,
  NoSearchResults,
  NoResultsImage,
  Result,
  Suggestion,
  RetryButton,
} from './styles'
import AppContext from '../../AppContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class HomeVideos extends Component {
  state = {
    searchValue: '',
    apiStatus: apiStatusConstants.initial,
    homeVideosList: [],
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  onChangeSearchInput = e => {
    this.setState({searchValue: e.target.value})
  }

  onEnterKeyPress = event => {
    if (event.key === 'Enter') {
      this.getHomeVideos()
    }
  }

  getHomeVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchValue} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchValue}`
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
        channel: {
          name: eachVideo.channel.name,
          profileImageUrl: eachVideo.channel.profile_image_url,
        },
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        homeVideosList: formattedVideosData,
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

  renderNoSearchResultsView = () => (
    <NoSearchResults>
      <NoResultsImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <Result>No Search results found</Result>
      <Suggestion>Try different key words or remove search filter</Suggestion>
      <RetryButton type="button" onClick={this.getHomeVideos}>
        Retry
      </RetryButton>
    </NoSearchResults>
  )

  renderSearchResultsView = () => {
    const {homeVideosList} = this.state
    return (
      <HomeVideosList>
        {homeVideosList.map(eachVideo => (
          <HomeVideoCard key={eachVideo.id} videoData={eachVideo} />
        ))}
      </HomeVideosList>
    )
  }

  renderHomeVideosList = () => {
    const {homeVideosList} = this.state

    return homeVideosList.length !== 0
      ? this.renderSearchResultsView()
      : this.renderNoSearchResultsView()
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
        <RetryButton type="button" onClick={this.getHomeVideos}>
          Retry
        </RetryButton>
      </NoSearchResults>
    )
  }

  renderHomeVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case 'IN_PROGRESS':
        return this.renderLoadingView()
      case 'SUCCESS':
        return this.renderHomeVideosList()
      case 'FAILURE':
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const {searchValue} = this.state

    return (
      <AppContext.Consumer>
        {value => {
          const {isDarkMode} = value
          const bgColor = isDarkMode ? '#181818' : '#ffffff'
          return (
            <HomeVideosContainer data-testid="home" bgColor={bgColor}>
              <SearchContainer bgColor={bgColor}>
                <SearchInput
                  type="search"
                  placeholder="Search"
                  value={searchValue}
                  onChange={this.onChangeSearchInput}
                  onKeyDown={this.onEnterKeyPress}
                  bgColor={bgColor}
                />
                <SearchButton
                  type="button"
                  data-testid="searchButton"
                  onClick={this.getHomeVideos}
                  bgColor={bgColor}
                >
                  <IoSearch />
                </SearchButton>
              </SearchContainer>
              {this.renderHomeVideos()}
            </HomeVideosContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default HomeVideos
