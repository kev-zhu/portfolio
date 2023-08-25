import '../css/navbar.css'

const NavBar = ({ scroll }) => {
  return (
    <div className={'navbar'}>
      <ul className={'flex'}>
        <li className='li-home' onClick={() => {scroll('home')}}>Home</li>
        <li className='li-about' onClick={() => {scroll('about')}}>About</li>
        <li className='li-skills' onClick={() => {scroll('skills')}}>Skills</li>
        <li className='li-projects' onClick={() => {scroll('projects')}}>Projects</li>
        <li className='li-contact' onClick={() => {scroll('contact')}}>Contact</li>
        {/* some other function to pop up here */}
        <li>Resume</li>
      </ul>
    </div>
  )
}


export default NavBar