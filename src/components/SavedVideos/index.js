import {Component} from 'react'
import Cookies from 'js-cookie'
import Header from '../Header'
import Sidebar from '../Sidebar'
import SavedVideoCard from '../SavedVideoCard'
import AppContext from '../../AppContext'
import {
  MainContainer,
  VideosContainer,
  NoSavedVideosDiv,
  NoSavedVideosImage,
} from './styles'

class SavedVideos extends Component {
  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      const {history} = this.props
      history.replace('/login')
    }
    return (
      <AppContext.Consumer>
        {value => {
          const {isDarkMode, savedVideosList} = value
          const bgColor = isDarkMode ? '#0f0f0f' : '#ffffff'
          const renderSavedVideosList = () => (
            <div>
              <h2>Saved Videos</h2>
              {savedVideosList.map(eachVideo => (
                <SavedVideoCard key={eachVideo.id} videoData={eachVideo} />
              ))}
            </div>
          )
          const renderNoSavedVideosList = () => (
            <NoSavedVideosDiv>
              <NoSavedVideosImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                alt="no saved videos"
              />
              <h2>No saved videos found</h2>
              <p>Save your videos by clicking a button</p>
            </NoSavedVideosDiv>
          )
          return (
            <>
              <Header />
              <MainContainer>
                <Sidebar />
                <VideosContainer data-testid="savedVideos" bgColor={bgColor}>
                  {savedVideosList.length === 0
                    ? renderNoSavedVideosList()
                    : renderSavedVideosList()}
                </VideosContainer>
              </MainContainer>
            </>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default SavedVideos
