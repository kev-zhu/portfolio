import '../css/about.css'
import intro from '../intro'

const About = () => {
  return (
    <div id='about' data-section='about'>
      <div className="about-container flex">
        <img className='self' src='/media/profpic.png' alt='self-img cannot be loaded'/>
        <p className='self-info'>{intro}</p>
      </div>

    </div>
  )
}

export default About