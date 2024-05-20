import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import AppContext from './AppContext'
import './App.css'

class App extends Component {
  state = {isDarkMode: false}

  handleThemeButton = () => {
    this.setState(prevState => ({
      isDarkMode: !prevState.isDarkMode,
    }))
  }

  render() {
    const {isDarkMode} = this.state
    return (
      <AppContext.Provider
        value={{
          isDarkMode,
          toggleDarkMode: this.handleThemeButton,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/" component={Home} />
        </Switch>
      </AppContext.Provider>
    )
  }
}

export default App
