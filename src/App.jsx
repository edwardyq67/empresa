import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HashRouter, Routes,Route } from 'react-router-dom'
import Informacion from './paginacion/Informacion'
import { useSelector } from 'react-redux'
import Loading from './componentes/Loading'
import Imagenes from './paginacion/Imagenes'
function App() {
  
  const [count, setCount] = useState(0)
  const loading = useSelector((state) => state.isLoading);
  return (
    <div className="App">
      <HashRouter>
      {loading && <Loading />}
      <Informacion/>
      <Imagenes/>
      </HashRouter>
    </div>
  )
}

export default App
