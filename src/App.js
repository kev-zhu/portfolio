import { useState, useEffect, useRef } from 'react'

import Header from './components/Header'
import Body from './components/Body'

import './css/main.css'

const App = () => {
  const [activeSection, setActiveSection] = useState(null)
  const observer = useRef(null)

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      const visibleSection = entries.find(entry => entry.isIntersecting)?.target

      if (visibleSection) {
        setActiveSection(visibleSection.id)
      }
    }, {
      //account for one px lost at the end for contact bc @ end of page
      threshold: .75,
    })

    const sections = document.querySelectorAll('[data-section]')

    sections.forEach(section => {
      observer.current.observe(section)
    })

    return () => {
      sections.forEach(section => {
        observer.current.unobserve(section)
      })
    }

  }, [])

  const clickScrollToPage = (page) => {
    const hamburgerCheck = document.querySelector('.hamburger-check')

    //deal with closing sidebar for mobile mode
    if (hamburgerCheck.checked) {
      hamburgerCheck.checked = false;
    }

    window.scrollTo({
      behavior: 'smooth',
      top: document.querySelector(`#${page}`).getBoundingClientRect().top -
        document.body.getBoundingClientRect().top -
        document.querySelector('.navbar').offsetHeight
    })
  }

  const setActive = (focus) => {
    document.querySelectorAll('.active').forEach(element => {
      element.classList.remove('active')
    })
    document.querySelector(`.li-${focus}`)?.classList.add('active')
  }

  return (
    <div>
      {setActive(activeSection)}
      <Header scroll={clickScrollToPage} />
      <Body scroll={clickScrollToPage} />
    </div>
  )
}


export default App