import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Citas from './pages/Citas.jsx'
import CitaDetalle from './pages/CitaDetalle.jsx'
import AgregarPaciente from './pages/AgregarPaciente.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
  const [citas, setCitas] = useState([
    { id: 1, paciente: 'Luis Pérez', fecha: new Date() },
    { id: 2, paciente: 'Ana Torres', fecha: new Date(new Date().setDate(new Date().getDate() + 1)) },
    { id: 3, paciente: 'Carlos Ruiz', fecha: new Date(new Date().setDate(new Date().getDate() + 2)) },
  ])

  const agregarCita = (nuevaCita) => {
    const proximoId = citas.length > 0 ? citas[citas.length - 1].id + 1 : 1
    const nuevasCitas = [...citas, { id: proximoId, ...nuevaCita }]
    setCitas(nuevasCitas)
  }

  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link to="/" className="btn-nav">Inicio</Link>
        <Link to="/agregar-paciente" className="btn-nav">Agregar Paciente</Link>
        <Link to="/citas" className="btn-nav">Ver Citas</Link>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agregar-paciente" element={<AgregarPaciente agregarCita={agregarCita} citas={citas} />} />
          <Route path="/citas" element={<Citas citas={citas} />} />
          <Route path="/cita/:id" element={<CitaDetalle citas={citas} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
