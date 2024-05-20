import React from 'react'

const AppContext = React.createContext({
  isDarkMode: false,
  toggleDarkMode: () => {},
})

export default AppContext
