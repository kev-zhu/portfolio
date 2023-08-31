import { useEffect, useRef } from 'react'

import '../css/projects.css'

const Projects = () => {
  const activePanel = useRef(0)
  const panelCount = useRef(null)

  useEffect(() => {
    const adjustCarouselContainerHeight = (height) => {
      document.querySelector('.carousel-container').style.height = height !== undefined ? `${height}px` : `${document.querySelector('.active-panel').offsetHeight}px`
    }

    const resizePanels = () => {
      const containerWidth = document.querySelector('.carousel-container').offsetWidth

      const adjustedPanelWidth = containerWidth / 3
      const adjustedPanelHeight = adjustedPanelWidth * 3 / 4


      const panels = document.querySelectorAll('.project-sample')
      const oldPanelWidth = Number(panels[0].offsetWidth)
      panels.forEach(panel => {
        const style = window.getComputedStyle(panel)
        const matrix = new DOMMatrixReadOnly(style.transform)
        const oldTransX = matrix.m41

        panel.style.width = `${panel.offsetWidth / oldPanelWidth * adjustedPanelWidth}px`
        panel.style.transform = `translateX(${oldTransX / Math.abs(oldTransX) * adjustedPanelWidth}px)`
      })
      
      adjustCarouselContainerHeight(adjustedPanelHeight)
    }

    panelCount.count = document.querySelectorAll('.project-sample').length
    setStartingPanel()
    rotatePanel()
    adjustCarouselContainerHeight()

    window.addEventListener('resize', resizePanels)

    return () => {
      window.removeEventListener('resize', resizePanels)
    }
  }, [])


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
        //make it look like its on rotation
        // transX = zRotation * panelWidth

        //makes it look more linear
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

  //currently using input + submit --> change to passing in a var later on click depending on btn to rotate to targeted panel
  // const testRef = () => {
  //   const target = Number(document.querySelector('#testval').value) || 0
  //   const oldActive = activePanel.active
  //   activePanel.current = target

  //   const shift = (oldActive + activePanel.current) % panelCount.count
  //   changeActivePanel(shift)
  //   rotatePanel()
  // }

  return (
    <div className='flex' id='projects' data-section='projects'>

      {/* <input type='text' id='testval'/>
      <button onClick={testRef}>test</button> */}

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