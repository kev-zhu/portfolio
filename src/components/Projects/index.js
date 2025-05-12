import './index.scss'
import projectList from './projects.js'
import { useState, useRef } from 'react'
import ProjectInfo from '../../ProjectInfo';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';


const Projects = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeProject, setActiveProject] = useState(undefined)
  const mediaRef = useRef()

  const renderImg = (path, alt) => {
    return (
      <img src={path} alt={alt}></img>
    )
  }

  const renderVideo = (path) => {
    return (
      <video autoPlay loop muted preload="auto">
        <source src={path} type='video/mp4'/>
      </video>
    )
  }

  const activateProjectInfo = (project) => {
    setIsOpen(true)
    setActiveProject(project)
  }

  const closeProjectInfo = () => {
    setIsOpen(false)
    setTimeout(() => {
      setActiveProject(undefined)
    }, 1000)
  }

  return (
    <div className="project-container">
      <ProjectInfo isOpen={isOpen} closeProjectInfo={closeProjectInfo} mediaRef={mediaRef} activeProject={activeProject} projectList={projectList} renderImg={renderImg} renderVideo={renderVideo}/>
      
      <ul>
        {projectList.projects.map(project => {
          const projectPath = projectList.base + project.folder
          const fileType = project.main.split('.').pop()
          
          return (
            <li className='project' key={project.title}>
              {fileType === 'png' ? renderImg(projectPath + project.main, project.alt): renderVideo(projectPath + project.main)}
              <div className='project-data'>
                <h2 className='project-title'>{project.title}</h2>
                <span className='brief-data'>{project.info.split('.')[0] + '.\u00A0'}</span>
                <span className='expand-data' onClick={() => activateProjectInfo(project)}>See More</span>
                <a className='project-gh' href={project.github} target="_blank" rel='noreferrer'>
                  <span>GitHub</span>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>             
              </div>
            </li>
          )
        })}
      </ul>

    </div>
  )
}

export default Projects