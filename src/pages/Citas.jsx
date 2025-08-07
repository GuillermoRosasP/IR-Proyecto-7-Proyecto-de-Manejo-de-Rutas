import { useState } from 'react'
import { Link } from 'react-router-dom'

function Citas({ citas }) {
  const [busqueda, setBusqueda] = useState('')

  const formatearFecha = (fecha) => {
    return fecha.toLocaleDateString(undefined, {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })
  }

  const formatearHora = (fecha) => {
    return fecha.toLocaleTimeString(undefined, {
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const filtrarPorDia = (diasDesdeHoy) => {
    const hoy = new Date()
    const fechaObjetivo = new Date(hoy)
    fechaObjetivo.setDate(hoy.getDate() + diasDesdeHoy)

    return citas.filter(cita => {
      const fechaCita = new Date(cita.fecha)
      const mismoDia = fechaCita.toDateString() === fechaObjetivo.toDateString()
      const nombreCoincide = cita.paciente.toLowerCase().includes(busqueda.toLowerCase())
      return mismoDia && nombreCoincide
    })
  }

  const citasHoy = filtrarPorDia(0)
  const citasManana = filtrarPorDia(1)
  const citasPasado = filtrarPorDia(2)

  const hoy = new Date()
  const manana = new Date(hoy)
  manana.setDate(hoy.getDate() + 1)
  const pasado = new Date(hoy)
  pasado.setDate(hoy.getDate() + 2)

  return (
    <section>
      <h2>Listado de Citas Próximas</h2>

      <input
        className="filtro"
        type="text"
        placeholder="Buscar por nombre..."
        value={busqueda}
        onChange={e => setBusqueda(e.target.value)}
      />

      <div className="citas-grid">
        <div className="cita-columna">
          <h3>Hoy - {formatearFecha(hoy)}</h3>
          {citasHoy.length === 0 && <p>No hay citas para hoy.</p>}
          {citasHoy.map(cita => (
            <Link
              key={cita.id}
              to={`/cita/${cita.id}`}
              className="cita-link cita-card"
              title={`Ver detalles de cita ${cita.paciente}`}
            >
              <strong>{cita.paciente}</strong> - {formatearHora(new Date(cita.fecha))}
            </Link>
          ))}
        </div>

        <div className="cita-columna">
          <h3>Mañana - {formatearFecha(manana)}</h3>
          {citasManana.length === 0 && <p>No hay citas para mañana.</p>}
          {citasManana.map(cita => (
            <Link
              key={cita.id}
              to={`/cita/${cita.id}`}
              className="cita-link cita-card"
              title={`Ver detalles de cita ${cita.paciente}`}
            >
              <strong>{cita.paciente}</strong> - {formatearHora(new Date(cita.fecha))}
            </Link>
          ))}
        </div>

        <div className="cita-columna">
          <h3>Pasado Mañana - {formatearFecha(pasado)}</h3>
          {citasPasado.length === 0 && <p>No hay citas para pasado mañana.</p>}
          {citasPasado.map(cita => (
            <Link
              key={cita.id}
              to={`/cita/${cita.id}`}
              className="cita-link cita-card"
              title={`Ver detalles de cita ${cita.paciente}`}
            >
              <strong>{cita.paciente}</strong> - {formatearHora(new Date(cita.fecha))}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Citas
