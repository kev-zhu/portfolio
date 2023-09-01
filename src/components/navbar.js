import '../css/navbar.css'

const NavBar = ({ scroll }) => {
  return (
    <div className='navbar'>
      <label className='nav-hamburger-menu'>
        <input className='hamburger-check' type='checkbox'/>
      </label>

      <ul className='nav-selection flex'>
        <li className='li-home' onClick={() => {scroll('home')}}>Home</li>
        <li className='li-about' onClick={() => {scroll('about')}}>About</li>
        <li className='li-skills' onClick={() => {scroll('skills')}}>Skills</li>
        <li className='li-projects' onClick={() => {scroll('projects')}}>Projects</li>
        <li className='li-contact' onClick={() => {scroll('contact')}}>Contact</li>
        <li>Resume</li>
      </ul>
    </div>
  )
}


export default NavBar