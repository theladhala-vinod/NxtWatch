import {IoMdHome} from 'react-icons/io'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import AppContext from '../../AppContext'
import {
  SidebarContainer,
  MenuList,
  MenuListItem,
  MenuItemLink,
  MenuItemName,
  ContactUsHeading,
  ContactUsIcons,
  ContactUsIcon,
  ContactUsDescription,
} from './styles'

const Sidebar = () => (
  <AppContext.Consumer>
    {value => {
      const {isDarkMode, activeTab, setActiveTab} = value

      const bgColor = isDarkMode ? '#181818' : '#ffffff'
      const textColor = isDarkMode ? '#ffffff' : '#181818'
      const activeTabBgColor = isDarkMode ? '#424242' : '#f1f5f9'

      return (
        <SidebarContainer bgColor={bgColor}>
          <section>
            <MenuList>
              <MenuListItem
                isActive={
                  activeTab === 'HOME' ? activeTabBgColor : 'transparent'
                }
                onClick={() => {
                  setActiveTab('HOME')
                }}
              >
                <MenuItemLink
                  to="/"
                  color={activeTab === 'HOME' ? '#ff0000' : '#909090'}
                >
                  <IoMdHome />
                  <MenuItemName color={textColor}>Home</MenuItemName>
                </MenuItemLink>
              </MenuListItem>
              <MenuListItem
                isActive={
                  activeTab === 'TRENDING' ? activeTabBgColor : 'transparent'
                }
                onClick={() => {
                  setActiveTab('TRENDING')
                }}
              >
                <MenuItemLink
                  to="/trending"
                  color={activeTab === 'TRENDING' ? '#ff0000' : '#909090'}
                >
                  <FaFire />
                  <MenuItemName color={textColor}>Trending</MenuItemName>
                </MenuItemLink>
              </MenuListItem>
              <MenuListItem
                isActive={
                  activeTab === 'GAMING' ? activeTabBgColor : 'transparent'
                }
                onClick={() => {
                  setActiveTab('GAMING')
                }}
              >
                <MenuItemLink
                  to="/gaming"
                  color={activeTab === 'GAMING' ? '#ff0000' : '#909090'}
                >
                  <SiYoutubegaming />
                  <MenuItemName color={textColor}>Gaming</MenuItemName>
                </MenuItemLink>
              </MenuListItem>
              <MenuListItem
                isActive={
                  activeTab === 'SAVED-VIDEOS'
                    ? activeTabBgColor
                    : 'transparent'
                }
                onClick={() => {
                  setActiveTab('SAVED-VIDEOS')
                }}
              >
                <MenuItemLink
                  to="/saved-videos"
                  color={activeTab === 'SAVED-VIDEOS' ? '#ff0000' : '#909090'}
                >
                  <CgPlayListAdd />
                  <MenuItemName color={textColor}>Saved Videos</MenuItemName>
                </MenuItemLink>
              </MenuListItem>
            </MenuList>
          </section>
          <section>
            <ContactUsHeading color={textColor}>CONTACT US</ContactUsHeading>
            <ContactUsIcons>
              <ContactUsIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <ContactUsIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png "
                alt="twitter logo"
              />
              <ContactUsIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </ContactUsIcons>
            <ContactUsDescription color={textColor}>
              Enjoy! Now to see your channels and recommendations!
            </ContactUsDescription>
          </section>
        </SidebarContainer>
      )
    }}
  </AppContext.Consumer>
)

export default Sidebar
