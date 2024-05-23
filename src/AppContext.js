import React from 'react'

const AppContext = React.createContext({
  isDarkMode: false,
  toggleDarkMode: () => {},
  activeTab: '',
  setActiveTab: () => {},
  savedVideosList: [],
  addToSavedVideosList: () => {},
  removeFromSavedVideosList: () => {},
})

export default AppContext
