import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
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

  addToSavedVideosList = video => {
    this.setState(prevState => ({
      savedVideosList: [...prevState.savedVideosList, video],
    }))
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
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/" component={Home} />
          <Route exact path="/trending" component={Trending} />
          <Route exact path="/gaming" component={Gaming} />
          <Route exact path="/saved-videos" component={SavedVideos} />
        </Switch>
      </AppContext.Provider>
    )
  }
}

export default App
