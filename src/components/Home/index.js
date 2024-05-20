import {Component} from 'react'
import Cookies from 'js-cookie'
import Header from '../Header'

class Home extends Component {
  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      const {history} = this.props
      history.replace('/login')
    }
    return (
      <>
        <Header />
      </>
    )
  }
}

export default Home
