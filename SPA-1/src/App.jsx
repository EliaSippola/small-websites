import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home'
import Connect from './components/Connect'
import Story from './components/Story'
import Map from './components/Map'

// icons
import '@fortawesome/fontawesome-free/js/all.js';
import '@fortawesome/fontawesome-free/css/all.css'
import Video from './components/Video'
import Traffic from './components/Traffic'

function App() {

  return (
    <BrowserRouter>
      <h1>Simple SPA (Single Page Application)</h1>
      <ul className='header'>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/story">Stories</NavLink></li>
        <li><NavLink to="/connect">Connect</NavLink></li>
        <li><NavLink to="/map">Map</NavLink></li>
        <li><NavLink to="/video">Video</NavLink></li>
        <li><NavLink to="/traffic">Traffic</NavLink></li>
      </ul>
      <div className='content'>
        <Routes>
          <Route path='/story' element={<Story />} />
          <Route path='/connect' element={<Connect />} />
          <Route path='/map' element={<Map />} />
          <Route path='/video' element={<Video />} />
          <Route path='/Traffic' element={<Traffic />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App