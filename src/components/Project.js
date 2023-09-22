const Project = ({ baseFolder, folder, main, alt, showDemo, githubLink }) => {
 
  const setUpImg = () => {
    return <img src={baseFolder + folder + main} alt={`${alt} - (Main)`}/>
  }

  const setUpVideo = () => {
    return <video autoPlay loop muted preload="auto">
      <source src={baseFolder + folder + main} type='video/mp4'/>
    </video>
  }

  const fileType = main.split('.').pop()

  const openGithub = () => {
    window.open(githubLink, '_blank')
  }
  
  return (
    <div className='project-main'>
      {fileType === 'png' ? setUpImg() : setUpVideo()}
      <div className="hover-active">
        <div className='project-main-buttons'>
          <button onClick={showDemo}>Show Demo</button>
          <span>/</span>
          <button onClick={openGithub}>GitHub</button>

        </div>

      </div>
    </div>
  )
}

export default Project