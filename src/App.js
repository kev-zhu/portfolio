import Header from './components/header'
import Body from './components/body'

import './css/main.css'

const App = () => { 
  const scrollToPage = (page) => {
    const p = document.querySelector(`.${page}`)
    p?.scrollIntoView({behavior:'smooth', block: 'center'})
  }

  return (
    <div>
      <Header scroll={scrollToPage} />
      <Body scroll={scrollToPage} />
    </div>
  )
}


export default App