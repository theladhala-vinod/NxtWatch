import React from 'react'

const AppContext = React.createContext({
  isDarkMode: false,
  toggleDarkMode: () => {},
  activeTab: '',
  setActiveTab: () => {},
  savedVideosList: [],
  addToSavedVideosList: () => {},
})

export default AppContext
