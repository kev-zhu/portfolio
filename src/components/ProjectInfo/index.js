import './index.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faArrowLeft, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const ProjectInfo = ({ isOpen, closeProjectInfo, activeProject, projectList, renderImg, renderVideo}) => {
  return (
      <div className={`project-info-container${isOpen === null ? ' initial' : ''}`}>
        <aside className={`project-info info-grid ${isOpen ? 'side-open' : 'side-close'}`}>
          <div className='project-return-item'>
            <div className='arrow' onClick={closeProjectInfo}>
                <FontAwesomeIcon icon={faArrowLeft} />
              </div>
              <div className='xmark' onClick={closeProjectInfo}>
                <FontAwesomeIcon icon={faCircleXmark} />
              </div>
            </div>
          <div className='project-data-item data-grid-container'>
            <h2 className='project-title item-lg'>{activeProject ? activeProject.title : ''}</h2>
            <p className='brief-data item-lg'>{activeProject ? activeProject.info : ''}</p>
            <p className='project-skills item-lg'>Primary Focus/Skills: {activeProject ? activeProject.skills.join(', ') : ''}</p>
            <div className='project-demo-link item-lg'>
              {activeProject ? (activeProject.demo ? <a href={activeProject.demo} target='_blank' rel='noreferrer'>{activeProject.demo}</a>: '' ) : ''}
            </div>
            {activeProject ? activeProject.media.map((media, ind) => {
              const projectPath = '.' + projectList.base + activeProject.folder
              const fileType = media.split('.').pop()
              const imgFile = media.split('.')[0].split('-').includes('mobile')
              return (<div className={['project', imgFile === true ? 'item-sm' : 'item-lg'].join(' ')} key={ind}>{fileType === 'png' ? renderImg(projectPath + media, projectPath + `cannot render image ${ind}`): renderVideo(projectPath + media)}</div>)
            }): ''}
          </div>
          <a className='project-gh-item' href={activeProject ? activeProject.github : ''} target='_blank' rel='noreferrer'>
            <span>Open Project on GitHub</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </aside>
      </div>
  )
}

export default ProjectInfo