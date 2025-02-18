import './index.scss'
import projectList from './projects.js'

const Projects = () => {
  const renderImg = (path, alt) => {
    return (
      <img src={path} alt={alt}></img>
    )
  }

  const renderVideo = (path, alt) => {
    return (
      <video autoPlay loop muted preload="auto">
        <source src={path} type='video/mp4'/>
      </video>
    )
  }

  return (
    <div className="project-container">
      <ul>
        {projectList.projects.map(project => {
          const projectPath = projectList.base + project.folder
          const fileType = project.main.split('.').pop()
          
          return (
            <li className='project'>
              {fileType === 'png' ? renderImg(projectPath + project.main, project.alt): renderVideo(projectPath + project.main, project.alt)}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Projects