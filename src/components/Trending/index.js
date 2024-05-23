import {Component} from 'react'
import Cookies from 'js-cookie'
import Header from '../Header'
import Sidebar from '../Sidebar'
import TrendingVideos from '../TrendingVideos'
import AppContext from '../../AppContext'
import {MainContainer, VideosContainer} from './styles'

class Trending extends Component {
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
                <VideosContainer data-test-id="trending" bgColor={bgColor}>
                  <h2>Trending</h2>
                  <TrendingVideos />
                </VideosContainer>
              </MainContainer>
            </>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Trending
