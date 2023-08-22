// import { useState, useEffect } from 'react'
// import { useRef } from 'react'

import '../css/navbar.css'

const NavBar = ({ scroll }) => {
  // const [scrolled, setScrolled] = useState([false])
  // const pageRef = useRef(null)

  // useEffect(() => {

  // }, [scrolled])

  return (
    <div className={'navbar'}>
      <ul className={'flex'}>
        <li onClick={() => {scroll('intro')}}>Home</li>
        <li onClick={() => {scroll('about')}}>About</li>
        <li onClick={() => {scroll('skills')}}>Skills</li>
        <li onClick={() => {scroll('projects')}}>Projects</li>
        <li onClick={() => {scroll('contact')}}>Contact</li>
        {/* some other function to pop up here */}
        <li>Resume</li>
      </ul>
    </div>
  )
}


export default NavBar