import { NavLink } from "react-router-dom";
import { useRef, useEffect } from 'react';
import "./index.scss";
import Logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFile, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  const hbInput = useRef(null)

  const disableHamburger = () => {
    hbInput.current.checked = false;
  }

  const checkWidthMin = () => {
    if (hbInput.current.checked && window.innerWidth > 550) {
      disableHamburger()
    }
  }

  useEffect(() => {
    window.addEventListener('resize', checkWidthMin)
    return () => {
      document.removeEventListener('resize', checkWidthMin)
    }
  })

  return (
    <div className="nav-bar">
      <label className="nav-hamburger-menu">
        <input ref={hbInput} className="hamburger-check" type='checkbox' />
      </label>
      <div className="nav-icons">
        <NavLink className="logo" to="/">
          <img src={Logo} alt="logo" />
        </NavLink>
        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            <span onClick={disableHamburger}>Home</span>
          </NavLink>
          <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            <span onClick={disableHamburger}>About</span>
          </NavLink>
          <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            <span onClick={disableHamburger}>Contact</span>
          </NavLink>
        </nav>
        <ul>
          <li>
            <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/kevinzhuu/'>
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
              <span onClick={disableHamburger}>LinkedIn</span>
            </a>
          </li>
          <li>
            <a target="_blank" rel='noreferrer' href='https://github.com/kev-zhu/'>
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
              <span onClick={disableHamburger}>Github</span>
            </a>
          </li>
          <li>
            <a target="_blank" rel='noreferrer' href= './Resume.pdf'>
              <FontAwesomeIcon icon={faFile} color="#4d4d4e"/>
              <span onClick={disableHamburger}>Resume</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
};

export default Sidebar;