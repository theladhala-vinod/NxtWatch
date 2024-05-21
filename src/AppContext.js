import React from 'react'

const AppContext = React.createContext({
  isDarkMode: false,
  toggleDarkMode: () => {},
  activeTab: '',
  setActiveTab: () => {},
})

export default AppContext
