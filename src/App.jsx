import { useEffect } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import Inicio from './components/view/Inicio'
import Menu from './common/Menu'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageBodas from './components/view/PageBodas'
import PageFiestas from './components/view/PageFiestas'
import Aos from 'aos'
import PageCumpleaños from './components/view/PageCumpleaños'
import PageRedes from './components/view/PageRedes'

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
            <Route path="/bodas" element={<PageBodas></PageBodas>} />
            <Route path="/fiestas" element={<PageFiestas></PageFiestas>} />
            <Route path="/cumpleaños" element={<PageCumpleaños></PageCumpleaños>} />
            <Route path="/redes" element={<PageRedes></PageRedes>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
