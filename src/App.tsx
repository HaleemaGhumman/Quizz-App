import { useEffect, useState } from 'react'
import Main from './components/Main'
import QuizProvider from './context/QuizProvider'
import QuizTopics from './components/QuizTopicsScreen'
function App() {
  const [currentTheme, setCurrentTheme] = useState('light')
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) setCurrentTheme(savedTheme)
  }, [])
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme)
  }, [currentTheme])
  return (
    <QuizProvider>
      <Main />
    </QuizProvider>
  )
}
export default App
