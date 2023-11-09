import Skill from './Skill'

import skillList from '../skills'
import '../css/skills.css'

const Skills = ({ ap, setAP, scroll }) => {

  return (
    <div className='flex' id='skills' data-section='skills'>
      <p className='skills-header'>Skills</p>

      <div className='skills-container flex'>
        {
          skillList.file_names.map(skill =>
            <Skill key={skill.name} baseFolder={skillList.base} skillInfo={skill} ap={ap} setAP={setAP} scroll={scroll} />
          )
        }
      </div>
    </div>
  )
}

export default Skills