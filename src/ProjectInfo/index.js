import './index.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faArrowLeft, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const ProjectInfo = ({ isOpen, closeProjectInfo, mediaRef, activeProject, projectList, renderImg, renderVideo}) => {
  return (
      <div className='project-info-container'>
        <aside className={`project-info ${isOpen ? 'side-open' : 'side-close'}`}>
          <div className='project-return-container'>
            <div className='arrow' onClick={closeProjectInfo}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>
            <div className='xmark' onClick={closeProjectInfo}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </div>
          </div>
          <div className='expanded-data'>
            <h2 className='project-title'>{activeProject ? activeProject.title : ''}</h2>
            <p className='brief-data'>{activeProject ? activeProject.info : ''}</p>
            <div className='project-media'>
              <ul ref={mediaRef}>
                {activeProject ? activeProject.media.map((media, ind) => {
                  const projectPath = projectList.base + activeProject.folder
                  const fileType = media.split('.').pop()
                  return (<li className='project' key={ind}>{fileType === 'png' ? renderImg(projectPath + media, projectPath + `cannot render image ${ind}`): renderVideo(projectPath + media)}</li>)
                }): ''}
              </ul>
            </div>
            <div className='project-skills'>{activeProject ? activeProject.skills.join(',\u00A0'): ''}</div>
            <a className='project-gh' href={activeProject ? activeProject.github : ''} target="_blank" rel='noreferrer'>
              <span>Open Project on GitHub</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
        </aside>
      </div>
  )
}

export default ProjectInfo