import styled from 'styled-components'

export const HomeVideosContainer = styled.div`
  background-color: #f1f5f9;
  width: 100%;
  @media screen and (min-width: 576px) {
  }
`
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  @media screen and (min-width: 576px) {
    width: 400px;
  }
`

export const SearchInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  height: 30px;
  border: 1px solid grey;
  padding: 8px;
`

export const LoaderContainer = styled.div`
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SearchIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 30px;
  border: 1px solid grey;
`
export const HomeVideosList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

export const NoSearchResults = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 500px;
  background-color: ;
  padding: 16px;
`

export const NoResultsImage = styled.img`
  width: 200px;
  margin-bottom: 32px;
`

export const Result = styled.h2`
  color: ;
  font-size: 18px;
  margin-bottom: 16px;
`

export const Suggestion = styled.p`
  color: ;
  margin-bottom: 16px;
`

export const RetryButton = styled.button`
border:none;
outline: none;
border-radius: 6px;
cursor: pointer;
background-color: violet;
color: #ffffff;
font-size; 14px;
width: 80px;
height: 30px;
`
