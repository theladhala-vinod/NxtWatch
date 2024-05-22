import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
`
export const VideosContainer = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    padding: 16px;
  }
`
export const Banner = styled.div`
  display: ${props => props.display};
  justify-content: space-between;
  padding: 32px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png ');
  background-size: cover;
`
export const BannerDescription = styled.div`
  width: 200px;
`
export const Logo = styled.img`
  width: 140px;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    width: 120px;
  }
`

export const Title = styled.p`
  font-family: 'Roboto';
  margin-bottom: 16px;
`

export const GetItNowButton = styled.button`
  border: 2px solid black;
  outline: none;
  font-family: 'Roboto';
  font-weight: 500;
  padding: 8px;
  margin-bottom: 8px;
  background-color: transparent;
  cursor: pointer;
`
export const CloseButton = styled.button`
  align-self: flex-start;
  border: none;
  outline: none;
  font-size: 20px;
  background-color: transparent;
`
