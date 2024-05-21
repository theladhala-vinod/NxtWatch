import styled from 'styled-components'

export const NavbarMobile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 6px;
  background-color: ${props => props.bgColor};
  position: sticky;
  top: 0;
  left: 0;

  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  height: 60px;
  background-color: ${props => props.bgColor};
  position: sticky;
  top: 0;
  left: 0;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const Logo = styled.img`
  width: 100px;
  @media screen and (min-width: 768px) {
    width: 150px;
  }
`

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  padding: 2px;
`

export const NavListItem = styled.li`
  justify-self: flex-start;
  margin-right: 8px;
  @media screen and (min-width: 768px) {
    margin-right: 16px;
  }
`

export const NavButton = styled.button`
  color: ${props => props.color};
  background-color: transparent;
  font-size: 20px;
  border: none;
  outline: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
`
export const LogoutButton = styled.button`
  color: ${props => props.color};
  background-color: transparent;
  border: 1px solid ${props => props.color};
  outline: none;
  border-radius: 4px;
  padding: 4px 16px;
  font-size: 14px;
  font-weight: 600;
`

export const ProfilePicture = styled.img`
  width: 30px;
`
