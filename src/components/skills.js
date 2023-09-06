import '../css/skills.css'

const Skills = ({ setAP }) => {
  return (
    <div className='flex' id='skills' data-section='skills'>
      <p className='skills-header'>Skills</p>

      <div className='skills-container flex'>
        <div className='item' onClick={() => {setAP(0)}}>1</div>
        <div className='item' onClick={() => {setAP(1)}}>2</div>
        <div className='item' onClick={() => {setAP(2)}}>3</div>
        <div className='item' onClick={() => {setAP(3)}}>4</div>
        <div className='item' onClick={() => {setAP(4)}}>5</div>
        <div className='item'></div>
        <div className='item'></div>
        <div className='item'></div>
        <div className='item'></div>
        <div className='item'></div>
      </div>
    </div>
  )
}

export default Skills