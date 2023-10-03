const Skill = ({ baseFolder, skillInfo , setAP, scroll }) => {
  // console.log(baseFolder, skillInfo)

  const handleSkillClick = (projectId) => {
    //ensure the it is a number
    if (projectId !== null) {
      setAP(Number(projectId))
    }
    scroll('projects')
  }

  return (
    <div className='item flex' onClick={() => {handleSkillClick(skillInfo.projectDemoInd)}}>
      <img src={baseFolder + skillInfo.file_name} alt={skillInfo.alt}/>
      <p className='item-info'>{skillInfo.name}</p>
    </div>
  )
}

export default Skill