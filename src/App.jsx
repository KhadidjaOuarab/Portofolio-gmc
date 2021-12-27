

import Header from './component/header'
import {contact} from './assets/data/contact'
import Main from './component/main'
import img from './assets/data/avatar.jpg'
import Footer from './component/footer'
function App() {
  
  return (
    <div className="App">
      <Header name={contact.name} fonction={contact.job}/>
      <Main image={img} alternative={contact.avatar.alt} introduction={contact.intro}/>
      <Footer/>
    </div>
  )
}

export default App
