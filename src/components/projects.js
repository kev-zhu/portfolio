import { useEffect, useRef, useCallback } from 'react'

import '../css/projects.css'

const Projects = ({ ap }) => {
  //starting out panel
  const activePanel = useRef(0)
  const panelCount = useRef(null)

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
      resizeWaitTime = setTimeout(resizePanels, 500)
    })

    return () => {
      window.removeEventListener('resize', resizePanels)
    }
  }, [])

  //link this to skills -- skills onclick -> send an index to this to rotate panel to certain index
  const setPanelActive = useCallback((targetIndex) => {
    const oldActive = activePanel.current
    activePanel.current = targetIndex

    const shift = (oldActive + activePanel.current) % panelCount.count
    changeActivePanel(shift)
    rotatePanel()
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

    changeActivePanel(1)
    rotatePanel()
    pauseBtns()
  }

  const nextPanel = () => {
    activePanel.current = (activePanel.current === panelCount.count - 1 ? 0 : activePanel.current + 1) % panelCount.count

    changeActivePanel(-1)
    rotatePanel()
    pauseBtns()
  }

  const changeActivePanel = (panelShift) => {
    const carousel = document.querySelector('.carousel')
    const currPanelIndex = parseInt(getComputedStyle(carousel).getPropertyValue('--panel-index'))
    carousel.style.setProperty('--panel-index', currPanelIndex + panelShift)

    const projectPanels = document.querySelectorAll('.project-sample')
    Array.from(projectPanels).find(panel => panel.classList.contains('active-panel')).classList.toggle('active-panel')
    projectPanels[activePanel.current % panelCount.count].classList.add('active-panel')
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
    }, 250)
  }

  return (
    <div className='flex' id='projects' data-section='projects'>
      <p className='projects-header'>Projects</p>

      <div className='carousel-container'>

        <div className='carousel'>
          <ul className='carousel-content'>
            <li className='project-sample' onClick={() => {setPanelActive(0)}}>1</li>
            <li className='project-sample' onClick={() => {setPanelActive(1)}}>2</li>
            <li className='project-sample' onClick={() => {setPanelActive(2)}}>3</li>
            <li className='project-sample' onClick={() => {setPanelActive(3)}}>4</li>
            <li className='project-sample' onClick={() => {setPanelActive(4)}}>5</li>
          </ul>
        </div>

        <div className='carousel-btns'>
          <button className='carousel-btn prev' onClick={prevPanel}>&#10094;</button>
          <button className='carousel-btn next' onClick={nextPanel}>&#10095;</button>
        </div>

      </div>

    </div>
  )
}

export default Projects