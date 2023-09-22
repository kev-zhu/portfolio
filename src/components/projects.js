import { useEffect, useRef, useCallback, useState } from 'react'

import Project from './Project'

import projectList from '../projects'
import '../css/projects.css'

const Projects = ({ ap, scroll }) => {
  //starting out panel
  const transitionTime = 500

  const activePanel = useRef(0)
  const panelCount = useRef(null)
  const [projectDemo, setProjectDemo] = useState(0)

  useEffect(() => {
    const adjustCarouselContainerHeight = (height) => {
      document.querySelector('.carousel-container').style.height = height !== undefined ? `${height}px` : `${document.querySelector('.active-panel').offsetHeight}px`
    }

    const resizePanels = () => {
      const containerWidth = document.querySelector('.carousel-container').offsetWidth

      const adjustedPanelWidth = containerWidth / 3
      const adjustedPanelHeight = document.querySelector('.active-panel').offsetHeight

      const panels = document.querySelectorAll('.project-sample')
      panels.forEach(panel => {
        const style = window.getComputedStyle(panel)
        const matrix = new DOMMatrixReadOnly(style.transform)
        const oldTransX = matrix.m41

        panel.style.transform = `translateX(${oldTransX / Math.abs(oldTransX) * adjustedPanelWidth}px)`
      })

      adjustCarouselContainerHeight(adjustedPanelHeight)
    }

    panelCount.count = document.querySelectorAll('.project-sample').length
    setStartingPanel()
    rotatePanel()
    adjustCarouselContainerHeight()

    let resizeWaitTime = null
    //resizing delay to account for change in process resizing calculations?
    window.addEventListener('resize', () => {
      clearTimeout(resizeWaitTime)
      resizeWaitTime = setTimeout(resizePanels, transitionTime)
    })

    return () => {
      window.removeEventListener('resize', resizePanels)
    }
  }, [])

  //link this to skills -- skills onclick -> send an index to this to rotate panel to certain index
  const setPanelActive = useCallback((targetIndex) => {
    const oldActive = activePanel.current
    activePanel.current = targetIndex

    if (oldActive === activePanel.current) return

    const shift = (oldActive + activePanel.current) % panelCount.count
    rotatePanel()
    changeActivePanel(shift)
  }, [])

  useEffect(() => {
    setPanelActive(ap)
  }, [ap, setPanelActive])


  const setStartingPanel = () => {
    if (document.querySelectorAll('.active-panel').length === 0) {
      const projectPanels = document.querySelectorAll('.project-sample')
      projectPanels[activePanel.current].classList.add('active-panel')
    }
  }

  const prevPanel = () => {
    activePanel.current = (activePanel.current === 0 ? panelCount.count - 1 : activePanel.current - 1) % panelCount.count
    rotatePanel()
    changeActivePanel(1)
    pauseBtns()
  }

  const nextPanel = () => {
    activePanel.current = (activePanel.current === panelCount.count - 1 ? 0 : activePanel.current + 1) % panelCount.count
    rotatePanel()
    changeActivePanel(-1)
    pauseBtns()
  }

  const changeActivePanel = (panelShift) => {
    const carousel = document.querySelector('.carousel')
    const currPanelIndex = parseInt(getComputedStyle(carousel).getPropertyValue('--panel-index'))
    carousel.style.setProperty('--panel-index', currPanelIndex + panelShift)

    const projectPanels = document.querySelectorAll('.project-sample')
    Array.from(projectPanels).find(panel => panel.classList.contains('active-panel')).classList.toggle('active-panel')
    const newActive = projectPanels[activePanel.current % panelCount.count]
    newActive.classList.add('active-panel')
    newActive.classList.toggle('scrolling')
    setTimeout(() => {
      newActive.classList.toggle('scrolling')
    }, transitionTime)
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

  //keep function? prevents a messy jumble of panels if click too fast
  const pauseBtns = () => {
    const carouselButtons = document.querySelectorAll('.carousel-btn')
    carouselButtons.forEach(button => {
      button.disabled = true
    })
    setTimeout(() => {
      carouselButtons.forEach(button => {
        button.disabled = false
      })
    }, transitionTime)
  }

  const showDemo = (projectNumber) => {
    console.log(projectList.projects.find(project => project.projectNumber === projectNumber))
    setProjectDemo(projectNumber)
    console.log(projectNumber)
    const demoContainer = document.querySelector('.demo-container')
    demoContainer.style.height = '60vh'

    const demoClose = document.querySelector('.demo-close')
    demoClose.style.opacity = '1'
    scroll('demo')

    console.log(`loading project Demo for project #${projectNumber || 'test'}`)
  }

  const hideDemo = () => {
    const demoContainer = document.querySelector('.demo-container')
    demoContainer.style.height = '0'

    const demoClose = document.querySelector('.demo-close')
    demoClose.style.opacity = '0'

    scroll('projects')
  }

  return (
    <div>
      <div className='flex' id='projects' data-section='projects'>
        <p className='projects-header'>Projects</p>

        <div className='carousel-container'>
          <div className='carousel'>
            <ul className='carousel-content'>

              {projectList.projects.map(project =>
                <li key={project.title} className='project-sample' onClick={() => { setPanelActive(project.projectNumber - 1)}}>
                  <Project baseFolder={projectList.base} folder={project.folder} main={project.main} alt={project.alt} showDemo={() => {showDemo(project.projectNumber)}} githubLink={project.github} />
                </li>
              )}

            </ul>
          </div>

          <div className='carousel-btns'>
            <button className='carousel-btn prev' onClick={prevPanel}>&#10094;</button>
            <button className='carousel-btn next' onClick={nextPanel}>&#10095;</button>
          </div>
        </div>

      </div>

      <div className='demo-container' id='demo'>
        <button className='demo-close' onClick={hideDemo}>&#10005;</button>

        <div className='project-demo flex'>
          <div className='project-info'>
            <h3>Title {projectDemo}</h3>
            <p>info</p>
            <p>skills</p>
          </div>
          <div className='project-media'></div>
        </div>
      </div>

    </div>

  )
}

export default Projects