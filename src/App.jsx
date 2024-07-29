import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import Inicio from './components/view/Inicio'
import Menu from './common/Menu'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageBodas from './components/view/PageBodas'

function App() {

  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <Menu></Menu>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/bodas" element={<PageBodas></PageBodas>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
