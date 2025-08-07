import { useParams } from 'react-router-dom'

function CitaDetalle({ citas }) {
  const { id } = useParams()
  const cita = citas ? citas.find(c => c.id === parseInt(id)) : null

  return (
    <section>
      <h2>Detalles de la cita</h2>
      {cita ? (
        <>
          <p><strong>ID:</strong> {cita.id}</p>
          <p><strong>Paciente:</strong> {cita.paciente}</p>
          <p><strong>Fecha:</strong> {new Date(cita.fecha).toLocaleString()}</p>
          {cita.email && <p><strong>Email:</strong> {cita.email}</p>}
          {cita.telefono && <p><strong>Teléfono:</strong> {cita.telefono}</p>}
        </>
      ) : (
        <p>Cita no encontrada.</p>
      )}
    </section>
  )
}

export default CitaDetalle
