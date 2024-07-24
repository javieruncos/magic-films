import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import Inicio from './components/view/Inicio'
import Menu from './common/Menu'

function App() {
  
  return (
    <>
      <div className='App'>
        <Menu></Menu>
         <Inicio></Inicio>
      </div>
    </>
  )
}

export default App
