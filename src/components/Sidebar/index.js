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

      const bgColor = isDarkMode ? '#0f0f0f' : '#ffffff'
      const textColor = isDarkMode ? '#ffffff' : '#0f0f0f'

      return (
        <SidebarContainer bgColor={bgColor}>
          <section>
            <MenuList>
              <MenuListItem
                isActive={activeTab === 'HOME' ? '#d7dfe9' : 'transparent'}
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
                isActive={activeTab === 'TRENDING' ? '#d7dfe9' : 'transparent'}
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
                isActive={activeTab === 'GAMING' ? '#d7dfe9' : 'transparent'}
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
                  activeTab === 'SAVED-VIDEOS' ? '#d7dfe9' : 'transparent'
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
              Enjoy! Now to see your channels and recommendations
            </ContactUsDescription>
          </section>
        </SidebarContainer>
      )
    }}
  </AppContext.Consumer>
)

export default Sidebar
