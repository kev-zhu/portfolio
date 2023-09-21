const Project = ({ baseFolder, folder, main, alt }) => {
 
  const setUpImg = () => {
    return <img src={baseFolder + folder + main} alt={`${alt} - (Main)`}/>
  }

  const setUpVideo = () => {
    return <video autoPlay loop muted preload="auto">
      <source src={baseFolder + folder + main} type='video/mp4'/>
    </video>
  }

  const fileType = main.split('.').pop()
  
  return fileType === 'png' ? setUpImg() : setUpVideo()
}

export default Project