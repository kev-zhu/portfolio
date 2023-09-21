import Skill from './Skill'

import skillList from '../skills'
import '../css/skills.css'

const Skills = ({ setAP, scroll }) => {

  return (
    <div className='flex' id='skills' data-section='skills'>
      <p className='skills-header'>Skills</p>

      <div className='skills-container flex'>
        {
          skillList.file_names.map(skill =>
            <Skill key={skill.name} baseFolder={skillList.base} skillInfo={skill} setAP={setAP} scroll={scroll} />
          )
        }
      </div>
    </div>
  )
}

export default Skills