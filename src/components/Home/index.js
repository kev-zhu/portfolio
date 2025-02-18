import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import AnimatedLetters from "../AnimatedLetters"
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['K', 'e', 'v', 'i', 'n']
  const jobArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
        <span className={letterClass}>H</span>
        <span className={`${letterClass} _12`}>i</span>
        <br/> 
        <span className={`${letterClass} _13`}>I</span>
        <span className={`${letterClass} _14`}>'m</span>
        <span className={`${letterClass} _14`}>&#160;</span>
        <AnimatedLetters letterClass={letterClass} strArr={nameArray} idx={15} />
        <br/>
        <AnimatedLetters letterClass={letterClass} strArr={jobArray} idx={20} />
        </h1>
        <h2>Self-taught Software Engineer / Code Enthusiast</h2>
        <Link to="/contact" className="flat-button">CONTACT ME</Link>
      </div>
    </div>
  )
}
export default Home