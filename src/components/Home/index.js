import {Component} from 'react'
import Cookies from 'js-cookie'
import {RiCloseFill} from 'react-icons/ri'
import Header from '../Header'
import Sidebar from '../Sidebar'
import HomeVideos from '../HomeVideos'
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
} from './styles'

class Home extends Component {
  state = {display: 'flex'}

  render() {
    const {display} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      const {history} = this.props
      history.replace('/login')
    }
    return (
      <AppContext.Consumer>
        {value => {
          const {isDarkMode} = value
          console.log(isDarkMode)

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
                  <HomeVideos />
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
