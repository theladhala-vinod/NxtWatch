import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import AppContext from '../../AppContext'
import {
  LoginForm,
  Form,
  Logo,
  Label,
  Input,
  ShowPassword,
  ShowPasswordLabel,
  ShowPasswordInput,
  LoginButton,
  ErrorMessage,
} from './styles'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showErrorMessage: false,
    errorMessage: '',
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 3,
    })
    history.replace('/')
  }

  onSubmitFailure = errorMessage => {
    this.setState({showErrorMessage: true, errorMessage})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const credentials = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(credentials),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  handleUsernameChange = event => {
    this.setState({username: event.target.value})
  }

  handlePasswordChange = event => {
    this.setState({password: event.target.value})
  }

  handleShowPasswordChange = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  render() {
    const {
      username,
      password,
      showPassword,
      showErrorMessage,
      errorMessage,
    } = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <AppContext.Consumer>
        {value => {
          const {isDarkMode} = value
          const logoUrl = isDarkMode
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          const divBgColor = isDarkMode ? 'grey' : '#ffffff'
          const formBgColor = isDarkMode ? 'black' : '#ffffff'
          const color = isDarkMode ? '#ffffff' : 'black;'
          return (
            <LoginForm bgColor={divBgColor}>
              <Form bgColor={formBgColor} onSubmit={this.onSubmitForm}>
                <Logo src={logoUrl} alt="website logo" />
                <Label htmlFor="email" color={color}>
                  USERNAME
                </Label>
                <Input
                  type="text"
                  id="email"
                  placeholder="Username"
                  value={username}
                  onChange={this.handleUsernameChange}
                />
                <Label htmlFor="password" color={color}>
                  PASSWORD
                </Label>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={this.handlePasswordChange}
                />
                <ShowPassword>
                  <ShowPasswordInput
                    type="checkbox"
                    id="show-password"
                    checked={showPassword}
                    onChange={this.handleShowPasswordChange}
                  />
                  <ShowPasswordLabel htmlFor="show-password" color={color}>
                    Show password
                  </ShowPasswordLabel>
                </ShowPassword>
                <LoginButton type="submit">Login</LoginButton>
                {showErrorMessage && (
                  <ErrorMessage>*{errorMessage}</ErrorMessage>
                )}
              </Form>
            </LoginForm>
          )
        }}
      </AppContext.Consumer>
    )
  }
}
export default Login
