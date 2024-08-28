import { useEffect } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import Inicio from './components/view/Inicio'
import EventosPage from './components/view/EventosPage'
import MarcasPage from './components/view/MarcasPage'
import Menu from './common/Menu'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Aos from 'aos'
import FooterMenu from './common/FooterMenu'
import WspBtn from './components/Ui/WspBtn'

function App() {

  useEffect(() => {
    Aos.init({
      duration: 1000
    })
  }, [])

  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <Menu></Menu>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/eventos" element={<EventosPage />} />
            <Route path="/marcas" element={<MarcasPage />} />
          </Routes>
          <WspBtn></WspBtn>
          <FooterMenu></FooterMenu>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
