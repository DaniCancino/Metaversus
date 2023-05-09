import './App.css'
import About from './components/About/about'
import Explore from './components/Explore/explore'
import Feedback from './components/Feedback/Feedback'
import Footer from './components/Footer/Footer'
import GetStarted from './components/GetStarted/getStarted'
import Hero from './components/Hero/hero'
import Insights from './components/Insights/Insights'
import Nav from './components/Nav/nav.jsx'
import WhatNews from './components/WhatNews/whatNews'
import World from './components/World/World'

function App() {
  

  return (
    <div className='App'>
      <div className='first-gradient' />
      <Nav />
      <Hero />
      <div className='relative'>
        <About />
        <div className='second-gradient' />
        <Explore />
      </div>
      <div className='relative'>
        <GetStarted />
        <div className='fourth-gradient' />
        <WhatNews />
      </div>
      <World />
      <div className='relative'>
        <Insights />
        <div className='fourth-gradient' />
        <Feedback />
      </div>
      <div className='relative'>
        <Footer />
        <div className='footer-gradient' />
      </div>
    </div>
  )
}

export default App
