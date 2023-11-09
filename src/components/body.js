import { useState } from 'react'

import NavBar from './Navbar'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

import '../css/body.css'

const Body = ({ scroll }) => {
  const [ap, setAP] = useState(0)

  return (
    <div className='body-container'>
      <NavBar scroll={scroll}/>
      <div className='body-content'>
        <About />
        <Skills ap={ap} setAP={setAP} scroll={scroll} />
        <Projects ap={ap} setAP={setAP} scroll={scroll} />
        <Contact />
      </div>

    </div>
  )
}

export default Body