import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  },[])

  return (
    <div className='container about-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters letterClass={letterClass} strArr={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} idx={15}/>
        </h1>
        <p>
          information about me
        </p>
        <p>
          information about me
        </p>
        <p>
          information about me
        </p>
      </div>
    </div>
  )
}

export default About