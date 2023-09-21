import { useEffect } from 'react'

import '../css/navbar.css'

const NavBar = ({ scroll }) => {
  useEffect(() => {
    const navBurger = document.querySelector('.nav-hamburger-menu')
    
    const scrollNavTop = () => {
      if (navBurger.getBoundingClientRect().top > 15) {
        window.scrollTo({
          behavior: 'smooth',
          top: document.querySelector(`#about`).getBoundingClientRect().top -
            document.body.getBoundingClientRect().top -
            document.querySelector('.navbar').offsetHeight
        })
      }
    }

    navBurger.addEventListener('click', scrollNavTop)

    return () => {
      navBurger.removeEventListener('click', scrollNavTop)
    }
  }, [])

  return (
    <div className='navbar'>
      <label className='nav-hamburger-menu'>
        <input className='hamburger-check' type='checkbox' />
      </label>

      <ul className='nav-selection flex'>
        <li className='li-home' onClick={() => { scroll('home') }}>Home</li>
        <li className='li-about' onClick={() => { scroll('about') }}>About</li>
        <li className='li-skills' onClick={() => { scroll('skills') }}>Skills</li>
        <li className='li-projects' onClick={() => { scroll('projects') }}>Projects</li>
        <li className='li-contact' onClick={() => { scroll('contact') }}>Contact</li>
        <li>Resume</li>
      </ul>
    </div>
  )
}


export default NavBar