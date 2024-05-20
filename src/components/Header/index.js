import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FaMoon} from 'react-icons/fa'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import AppContext from '../../AppContext'

import {
  NavbarMobile,
  Logo,
  NavList,
  NavListItem,
  NavButton,
  Navbar,
  LogoutButton,
  ProfilePicture,
} from './styles'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <AppContext.Consumer>
      {value => {
        const {isDarkMode, toggleDarkMode} = value
        const handleThemeChange = () => {
          toggleDarkMode()
        }
        const logoUrl = isDarkMode
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        const themeIcon = isDarkMode ? <FiSun /> : <FaMoon />

        const bgColor = isDarkMode ? '#181818' : '#f9f9f9'

        const textColor = isDarkMode ? '#f9f9f9' : '#181818'

        const logoutButtonColor = isDarkMode ? '#f9f9f9' : '#3b82f6'

        return (
          <>
            <NavbarMobile bgColor={bgColor}>
              <Link to="/">
                <Logo src={logoUrl} alt="website logo" />
              </Link>
              <NavList>
                <NavListItem>
                  <NavButton
                    type="button"
                    data-testid="theme"
                    color={textColor}
                    onClick={handleThemeChange}
                  >
                    {themeIcon}
                  </NavButton>
                </NavListItem>
                <NavListItem>
                  <NavButton
                    type="button"
                    aria-label="hamburger"
                    color={textColor}
                  >
                    <GiHamburgerMenu />
                  </NavButton>
                </NavListItem>
                <NavListItem>
                  <NavButton
                    type="button"
                    aria-label="logout"
                    color={textColor}
                    onClick={onClickLogout}
                  >
                    <FiLogOut />
                  </NavButton>
                </NavListItem>
              </NavList>
            </NavbarMobile>
            <Navbar bgColor={bgColor}>
              <Link to="/">
                <Logo src={logoUrl} alt="website logo" />
              </Link>
              <NavList>
                <NavListItem>
                  <NavButton
                    type="button"
                    data-testid="theme"
                    color={textColor}
                    onClick={handleThemeChange}
                  >
                    {themeIcon}
                  </NavButton>
                </NavListItem>
                <NavListItem>
                  <NavButton type="button" color={textColor}>
                    <ProfilePicture
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                      alt="profile"
                    />
                  </NavButton>
                </NavListItem>
                <NavListItem>
                  <LogoutButton
                    type="button"
                    color={logoutButtonColor}
                    onClick={onClickLogout}
                  >
                    Logout
                  </LogoutButton>
                </NavListItem>
              </NavList>
            </Navbar>
          </>
        )
      }}
    </AppContext.Consumer>
  )
}
export default withRouter(Header)
