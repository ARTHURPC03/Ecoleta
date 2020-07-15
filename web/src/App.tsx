import React from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import usePersistedState from './utils/usePersistedState'

import Header from './components/Header'
import light from './styles/themes/light'
import dark from './styles/themes/dark'

import GlobalStyle from './styles/global'

import './App.css'

import Routes from './routes'

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header toggleTheme={toggleTheme} />
        <Routes />
        <GlobalStyle />
      </Router>
    </ThemeProvider>
  )
}

export default App
