import { useState } from 'react'

import NavBar from './navbar'
import About from './about'
import Skills from './skills'
import Projects from './projects'
import Contact from './contact'

import '../css/body.css'

const Body = ({ scroll }) => {
  const [ap, setAP] = useState(0)

  return (
    <div className='body-container'>
      <NavBar scroll={scroll}/>
      <div className='body-content'>
        <About />
        <Skills setAP={setAP} />
        <Projects ap={ap} setAP={setAP} />
        <Contact />
      </div>

    </div>
  )
}

export default Body