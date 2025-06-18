import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import AnimatedLetters from "../AnimatedLetters"
import './index.scss'
import Projects from '../Projects'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = 'Kevin'.split('')
  const titleArray = 'Full-Stack Developer'.split('')
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <div className="page-container home-page">
      <div className="text-zone">
        <h1>
        <span className={letterClass}>H</span>
        <span className={`${letterClass} _9`}>i</span>
        <span className={`${letterClass} _10`}>!</span>
        <br/> 
        <span className={`${letterClass} _11`}>I</span>
        <span className={`${letterClass} _12`}>'</span>
        <span className={`${letterClass} _13`}>m</span>
        <span className={`${letterClass} _14`}>&#160;</span>
        <AnimatedLetters letterClass={letterClass} strArr={nameArray} idx={15} />
        <br/>
        <AnimatedLetters letterClass={letterClass} strArr={titleArray} idx={16} />
        </h1>
        <h2>Self-taught Software Engineer<span></span>Code Enthusiast</h2>
        <Link to="/contact" className="flat-button">CONTACT ME</Link>
      </div>
      <Projects />
    </div>
  )
}
export default Home