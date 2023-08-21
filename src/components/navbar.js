// import { useState, useEffect } from 'react'

import '../css/navbar.css'

const NavBar = () => {
  // const [scrolled, setScrolled] = useState([false])

  // useEffect(() => {

  // }, [scrolled])

  return (
    <div className={'navbar'}>
      <ul className={'flex'}>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
        <li>Resume</li>
      </ul>
    </div>
  )
}


export default NavBar