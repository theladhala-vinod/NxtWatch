import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {RiCloseFill} from 'react-icons/ri'
import {IoSearch} from 'react-icons/io5'
import Header from '../Header'
import Sidebar from '../Sidebar'
import AppContext from '../../AppContext'

import {
  MainContainer,
  VideosContainer,
  Banner,
  BannerDescription,
  Logo,
  Title,
  GetItNowButton,
  CloseButton,
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

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    searchValue: '',
    apiStatus: apiStatusConstants.initial,
    homeVideosList: [],
    display: 'flex',
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
          <HomeVideosListItem key={eachVideo.id}>
            <VideoLink to={`/videos/${eachVideo.id}`}>
              <Thumbnail src={eachVideo.thumbnailUrl} alt="video thumbnail" />
              <VideoDetails>
                <ProfileImage
                  src={eachVideo.channel.profileImageUrl}
                  alt="channel logo"
                />
                <VideoDescription>
                  <VideoTitle>{eachVideo.title}</VideoTitle>
                  <VideoStats>
                    <ChannelName>{eachVideo.channel.name}</ChannelName>
                    <StatsAndDateDiv>
                      <ViewsCount>{`${eachVideo.viewCount} views `}</ViewsCount>
                      <PublishedAt>{eachVideo.publishedAt}</PublishedAt>
                    </StatsAndDateDiv>
                  </VideoStats>
                </VideoDescription>
              </VideoDetails>
            </VideoLink>
          </HomeVideosListItem>
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
    const {display, searchValue} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      const {history} = this.props
      history.replace('/login')
    }
    return (
      <AppContext.Consumer>
        {value => {
          const {isDarkMode} = value
          const bgColor = isDarkMode ? '#181818' : '#ffffff'
          return (
            <>
              <Header />
              <MainContainer>
                <Sidebar />
                <VideosContainer>
                  <Banner data-testid="banner" display={display}>
                    <BannerDescription>
                      <Logo
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <Title>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </Title>
                      <GetItNowButton type="button">GET IT NOW</GetItNowButton>
                    </BannerDescription>
                    <CloseButton
                      type="button"
                      aria-label="close"
                      data-testid="close"
                      onClick={() => {
                        this.setState({display: 'none'})
                      }}
                    >
                      <RiCloseFill />
                    </CloseButton>
                  </Banner>

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
                </VideosContainer>
              </MainContainer>
            </>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Home
