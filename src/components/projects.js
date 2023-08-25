import { useEffect, useRef } from 'react'

import '../css/projects.css'

const Projects = () => {
  const activePanel = useRef(1)
  const panelCount = useRef(null)

  useEffect(() => {
    panelCount.count = document.querySelectorAll('.project-sample').length
    setStartingPanel()
  }, [])

  const setStartingPanel = () => {
    if (document.querySelectorAll('.active-panel').length === 0) {
      const projectPanels = document.querySelectorAll('.project-sample')
      projectPanels[activePanel.current].classList.add('active-panel')
    }
  }

  const prevPanel = () => {
    activePanel.current = (activePanel.current === 0 ? panelCount.count - 1 : activePanel.current - 1) % panelCount.count
    changeActivePanel(-1)
  }

  const nextPanel = () => {
    activePanel.current = (activePanel.current === panelCount.count - 1 ? 0 : activePanel.current + 1) % panelCount.count
    changeActivePanel(1)
  }

  const changeActivePanel = (panelShift) => {
    const carousel = document.querySelector('.carousel')
    const currPanelIndex = parseInt(getComputedStyle(carousel).getPropertyValue('--panel-index'))
    carousel.style.setProperty('--panel-index', currPanelIndex + panelShift)

    const projectPanels = document.querySelectorAll('.project-sample')
    Array.from(projectPanels).find(panel => panel.classList.contains('active-panel')).classList.toggle('active-panel')
    projectPanels[activePanel.current].classList.add('active-panel')
  }

  return (
    <div className='flex' id='projects' data-section='projects'>
      <p className='projects-header'>Projects</p>

      <div className='carousel-container'>

        <div className='carousel-btns'>
          <button className='carousel-btn prev' onClick={prevPanel}>&#10094;</button>
          <button className='carousel-btn next' onClick={nextPanel}>&#10095;</button>
        </div>

        <div className='carousel flex'>
          <ul className='carousel-content flex'>
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