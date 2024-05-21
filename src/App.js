import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import AppContext from './AppContext'
import './App.css'

class App extends Component {
  state = {isDarkMode: false, activeTab: 'HOME'}

  handleThemeButton = () => {
    this.setState(prevState => ({
      isDarkMode: !prevState.isDarkMode,
    }))
  }

  setActiveTab = tabName => {
    this.setState({activeTab: tabName})
  }

  render() {
    const {isDarkMode, activeTab} = this.state
    return (
      <AppContext.Provider
        value={{
          isDarkMode,
          toggleDarkMode: this.handleThemeButton,
          activeTab,
          setActiveTab: this.setActiveTab,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/" component={Home} />
          <Route exact path="/trending" component={Home} />
          <Route exact path="/gaming" component={Home} />
          <Route exact path="/saved-videos" component={Home} />
        </Switch>
      </AppContext.Provider>
    )
  }
}

export default App
