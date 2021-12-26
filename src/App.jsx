

import Header from './component/header'
import {contact} from './assets/data/contact'
import Main from './component/main'
import img from './assets/data/avatar.jpg'
function App() {
  
  return (
    <div className="App">
      <Header name={contact.name} fonction={contact.job}/>
      <Main image={img} alternative={contact.avatar.alt}/>
    </div>
  )
}

export default App
