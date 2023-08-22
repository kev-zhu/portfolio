import NavBar from './navbar'
import Lorem from './lorem'
import About from './about'
import Skills from './skills'
import Projects from './projects'
import Contact from './contact'

import '../css/body.css'

const Body = ({ scroll }) => {
  return (
    <div className={'body-container'}>
      <NavBar scroll={scroll}/>
      <Lorem count={10} />
      <About />
      <Lorem count={10} />
      <Skills />
      <Lorem count={10} />
      <Projects />
      <Lorem count={10} />
      <Contact />
      <Lorem count={10} />
    </div>
  )
}

export default Body