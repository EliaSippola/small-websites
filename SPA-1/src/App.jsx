import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home'
import Connect from './components/Connect'
import Story from './components/Story'
import Map from './components/Map'
import Video from './components/Video'
import Traffic from './components/Traffic'
import Donuts from './components/Donuts'
import SchemaForm from './components/schema-form'

// icons
import '@fortawesome/fontawesome-free/js/all.js';
import '@fortawesome/fontawesome-free/css/all.css';
import Wikisearch from './components/Wikisearch'

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
        <li><NavLink to="/donuts">Donuts</NavLink></li>
        <li><NavLink to="/schema-form">Schema form</NavLink></li>
        <li><NavLink to="/wikisearch">Wiki search</NavLink></li>
      </ul>
      <div className='content'>
        <Routes>
          <Route path='/story' element={<Story />} />
          <Route path='/connect' element={<Connect />} />
          <Route path='/map' element={<Map />} />
          <Route path='/video' element={<Video />} />
          <Route path='/traffic' element={<Traffic />} />
          <Route path='/donuts' element={<Donuts />} />
          <Route path='/schema-form' element={<SchemaForm />} />
          <Route path='/wikisearch' element={<Wikisearch />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App