import '../css/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const expandLinks = () => {
    document.querySelector('.quick-hover').style.display = 'none'
    document.querySelectorAll('.hover-icon').forEach(iconElement => {
      iconElement.style.display = 'block'
    })
  }

  const collapseLinks = () => {
    document.querySelector('.quick-hover').style.display = 'block'
    document.querySelectorAll('.hover-icon').forEach(iconElement => {
      iconElement.style.display = 'none'
    })
  }

  return (
    <div className='intro' id='home' data-section='home'>
      <div className='quick-links-container' onMouseEnter={expandLinks} onMouseLeave={collapseLinks}>
        <div className='quick-hover'>i</div>
        <div className='hover-icon'>
          <a href='https://github.com/kev-zhu' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <div className='hover-icon'>
          <a href='http://www.linkedin.com/in/kevinzhuu' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className='hover-icon'>
          <a href='/portfolio/Resume.pdf' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faFile} />
          </a>
        </div>
      </div>

      <p>Hello, my name is Kevin Zhu, a passionate self-taught programmer driven to innovate and solve with code.</p>
    </div>
  )
}

export default Header