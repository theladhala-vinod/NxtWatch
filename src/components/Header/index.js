import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
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
  ModalContainer,
  ModalDesc,
  AlignRow,
  CancelButton,
  ConfirmButton,
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

        const bgColor = isDarkMode ? '#0f0f0f' : '#ffffff'

        const textColor = isDarkMode ? '#ffffff' : '#0f0f0f'

        const logoutButtonColor = isDarkMode ? '#ffffff' : '#3b82f6'

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
                  <Popup
                    modal
                    trigger={
                      <NavButton type="button" data-testid="iconButton">
                        <FiLogOut />
                      </NavButton>
                    }
                  >
                    {close => (
                      <ModalContainer>
                        <ModalDesc>Are you sure, you want to logout</ModalDesc>
                        <AlignRow>
                          <CancelButton
                            type="button"
                            data-testid="closeButton"
                            onClick={() => close()}
                          >
                            Cancel
                          </CancelButton>

                          <ConfirmButton type="button" onClick={onClickLogout}>
                            Confirm
                          </ConfirmButton>
                        </AlignRow>
                      </ModalContainer>
                    )}
                  </Popup>
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
                  <ProfilePicture
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                </NavListItem>
                <NavListItem>
                  <Popup
                    modal
                    trigger={
                      <LogoutButton
                        type="button"
                        color={logoutButtonColor}
                        onClick={onClickLogout}
                      >
                        Logout
                      </LogoutButton>
                    }
                  >
                    {close => (
                      <ModalContainer>
                        <ModalDesc>Are you sure, you want to logout</ModalDesc>
                        <AlignRow>
                          <CancelButton
                            type="button"
                            data-testid="closeButton"
                            onClick={() => close()}
                          >
                            Cancel
                          </CancelButton>

                          <ConfirmButton type="button" onClick={onClickLogout}>
                            Confirm
                          </ConfirmButton>
                        </AlignRow>
                      </ModalContainer>
                    )}
                  </Popup>
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
