import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home'
import Connect from './components/Connect'
import Story from './components/Story'

function App() {

  return (
    <BrowserRouter>
      <h1>Simple SPA (Single Page Application)</h1>
      <ul className='header'>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/story">Stories</NavLink></li>
        <li><NavLink to="/connect">Connect</NavLink></li>
      </ul>
      <div className='content'>
        <Routes>
          <Route path='/story' element={<Story />} />
          <Route path='/connect' element={<Connect />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App