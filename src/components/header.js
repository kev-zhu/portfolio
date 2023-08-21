import '../css/header.css'

const Header = () => {
  const darkHandler = () => {
    document.querySelector('body').classList.toggle('dark')
  }

  return (
    <div className={'intro'}>

      <div className={'header'}>
        <a href={'.'}>Kevin Zhu</a>
        <button onClick={darkHandler}>Darkmode?</button>
      </div>

      <p>Hello, my name is Kevin Zhu, a self-taught web-developer. (more to this later)</p>
    </div>
  )
}

export default Header