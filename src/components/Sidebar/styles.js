import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  height: calc(100vh - 60px);
  background-color: ${props => props.bgColor};
  position: sticky;
  top: 60;
  left: 0;
  position: -webkit-sticky;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const MenuList = styled.ul`
  padding-top: 16px;
`

export const MenuListItem = styled.li`
  background-color: ${props => props.isActive};
  width: 100%;
  padding-left: 16px;
  cursor: pointer;
`
export const MenuItemLink = styled(Link)`
  display: flex;
  text-decoration: none;
  color: ${props => props.color};
  padding: 8px;
`
export const MenuItemName = styled.p`
  color: ${props => props.color};
  width: 150px;
  font-size: 14px;
  margin-left: 16px;
`
export const ContactUsHeading = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => props.color};
  margin-left: 16px;
  margin-bottom: 16px;
`

export const ContactUsIcons = styled.div`
  margin-left: 16px;
  margin-bottom: 16px;
`

export const ContactUsIcon = styled.img`
  width: 30px;
  margin-right: 8px;
`

export const ContactUsDescription = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => props.color};
  margin-left: 16px;
  margin-bottom: 16px;
`
