import { useEffect } from 'react'
import './App.css'
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'

const App = () => {

  useEffect(() => {
    console.log("website rendered..")
  }, []);

  return (
    <>
      <Header title="Header" />
      <Content />
      <Footer />
    </>
  )
}

export default App
