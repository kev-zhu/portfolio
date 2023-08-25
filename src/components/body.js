import NavBar from './navbar'
import About from './about'
import Skills from './skills'
import Projects from './projects'
import Contact from './contact'

import '../css/body.css'

const Body = ({ scroll }) => {
  return (
    <div className='body-container'>
      <NavBar scroll={scroll}/>
      <div className='body-content'>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>

    </div>
  )
}

export default Body