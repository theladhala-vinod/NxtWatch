import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItem from './components/VideoItem'
import NotFound from './components/NotFound'
import AppContext from './AppContext'
import './App.css'

class App extends Component {
  state = {
    isDarkMode: false,
    activeTab: 'HOME',
    savedVideosList: [],
  }

  handleThemeButton = () => {
    this.setState(prevState => ({
      isDarkMode: !prevState.isDarkMode,
    }))
  }

  setActiveTab = tabName => {
    this.setState({activeTab: tabName})
  }

  //   addToSavedVideosList = videoDetails => {
  //     const {savedVideosList} = this.state
  //     const videoObj = savedVideosList.find(
  //       eachVideo => eachVideo.id === videoDetails.id,
  //     )

  //     if (videoObj) {
  //       this.setState(prevState => ({
  //         savedVideosList: [...prevState.savedVideosList],
  //       }))
  //     } else {
  //       this.setState({
  //         savedVideosList: [...savedVideosList, videoObj],
  //       })
  //     }
  //   }

  addToSavedVideosList = videoDetails => {
    const {savedVideosList} = this.state
    const videoObj = savedVideosList.find(
      eachVideo => eachVideo.id === videoDetails.id,
    )

    if (!videoObj) {
      this.setState({
        savedVideosList: [...savedVideosList, videoDetails],
      })
    }
  }

  removeFromSavedVideosList = id => {
    const {savedVideosList} = this.state
    const updatedVideos = savedVideosList.filter(each => each.id !== id)
    this.setState({savedVideosList: updatedVideos})
  }

  render() {
    const {isDarkMode, activeTab, savedVideosList} = this.state
    return (
      <AppContext.Provider
        value={{
          isDarkMode,
          toggleDarkMode: this.handleThemeButton,
          activeTab,
          setActiveTab: this.setActiveTab,
          savedVideosList,
          addToSavedVideosList: this.addToSavedVideosList,
          removeFromSavedVideosList: this.removeFromSavedVideosList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/" component={Home} />
          <Route exact path="/trending" component={Trending} />
          <Route exact path="/gaming" component={Gaming} />
          <Route exact path="/saved-videos" component={SavedVideos} />
          <Route exact path="/videos/:id" component={VideoItem} />
          <Route component={NotFound} />
        </Switch>
      </AppContext.Provider>
    )
  }
}

export default App
