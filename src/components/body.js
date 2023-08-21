import NavBar from './navbar'
import Lorem from './lorem'

import '../css/body.css'

const Body = () => {
  return (
    <div className={'body-container'}>
      <NavBar />
      <Lorem count={10} />
    </div>
  )
}

export default Body