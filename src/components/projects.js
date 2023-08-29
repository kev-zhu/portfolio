import { useEffect, useRef } from 'react'

import '../css/projects.css'

const Projects = () => {
  const activePanel = useRef(0)
  const panelCount = useRef(null)

  useEffect(() => {
    panelCount.count = document.querySelectorAll('.project-sample').length
    setStartingPanel()
    rotatePanel()
  }, [])


  const setStartingPanel = () => {
    if (document.querySelectorAll('.active-panel').length === 0) {
      const projectPanels = document.querySelectorAll('.project-sample')
      projectPanels[activePanel.current].classList.add('active-panel')
      document.querySelector('.carousel-container').style.height = `${document.querySelector('.active-panel').offsetHeight}px`
    }
  }

  const prevPanel = () => {
    activePanel.current = (activePanel.current === 0 ? panelCount.count - 1 : activePanel.current - 1) % panelCount.count

    changeActivePanel(1)
    rotatePanel()
  }

  const nextPanel = () => {
    activePanel.current = (activePanel.current === panelCount.count - 1 ? 0 : activePanel.current + 1) % panelCount.count

    changeActivePanel(-1)
    rotatePanel()
  }

  const changeActivePanel = (panelShift) => {
    const carousel = document.querySelector('.carousel')
    const currPanelIndex = parseInt(getComputedStyle(carousel).getPropertyValue('--panel-index'))
    carousel.style.setProperty('--panel-index', currPanelIndex + panelShift)

    const projectPanels = document.querySelectorAll('.project-sample')
    Array.from(projectPanels).find(panel => panel.classList.contains('active-panel')).classList.toggle('active-panel')
    projectPanels[activePanel.current].classList.add('active-panel')
  }

  const rotatePanel = () => {
    const carousel = document.querySelector('.carousel')
    const currPanelIndex = parseInt(getComputedStyle(carousel).getPropertyValue('--panel-index'))

    const panels = document.querySelectorAll('.project-sample')
    const panelWidth = panels[0].offsetWidth
    const angleRad = 2 * Math.PI / panelCount.count

    let shift = currPanelIndex < 0 ? (panelCount.count + (currPanelIndex % panelCount.count)) % panelCount.count : currPanelIndex % panelCount.count
    //take account of shift to whichever active panel is showing
    
    shift = panelCount.count - activePanel.current
    
    let index = 0

    panels.forEach(panel => {
      const oneSectionX = Number(Math.cos(angleRad).toFixed(10))

      const xRotation = Number(Math.cos((index + shift) * angleRad).toFixed(10))
      const zRotation = Number(Math.sin((index + shift) * angleRad).toFixed(10))

      let transX
      if (xRotation === 1) {
        transX = 0
        panel.style.zIndex = '2'
        panel.style.opacity = '1'
      } else if (xRotation === oneSectionX) {
        transX = Math.round(zRotation) * panelWidth
        panel.style.zIndex = '1'
        panel.style.opacity = '0.5'
      } else {
        transX = 2 * Math.round(zRotation) * panelWidth
        panel.style.zIndex = '1'
        panel.style.opacity = '0'
      }

      panels[index % panels.length].style.transform = `translateX(${transX}px)`

      index += 1
    })
  }

  return (
    <div className='flex' id='projects' data-section='projects'>
      <p className='projects-header'>Projects</p>

      <div className='carousel-container'>

        <div className='carousel-btns'>
          <button className='carousel-btn prev' onClick={prevPanel}>&#10094;</button>
          <button className='carousel-btn next' onClick={nextPanel}>&#10095;</button>
        </div>

        <div className='carousel'>
          <ul className='carousel-content'>
            <li className='project-sample'>1</li>
            <li className='project-sample'>2</li>
            <li className='project-sample'>3</li>
            <li className='project-sample'>4</li>
            <li className='project-sample'>5</li>
          </ul>
        </div>

      </div>

    </div>
  )
}

export default Projects