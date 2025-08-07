import { useState } from 'react'

function AgregarPaciente({ agregarCita, citas }) {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')
  const [fecha, setFecha] = useState('')
  const [hora, setHora] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!nombre.trim() || !email.trim() || !fecha.trim() || !hora.trim()) {
      alert('Por favor, completa nombre, correo, fecha y hora.')
      return
    }

    const fechaHora = new Date(`${fecha}T${hora}`)

    // Validar que no exista cita en misma fecha y hora
    const existeCita = citas.some(cita => {
      const citaFecha = new Date(cita.fecha)
      return citaFecha.getTime() === fechaHora.getTime()
    })

    if (existeCita) {
      alert('Ya hay una cita agendada en esa fecha y hora. Por favor, elige otro horario.')
      return
    }

    agregarCita({
      paciente: nombre,
      fecha: fechaHora,
      email,
      telefono,
    })

    alert(`Paciente y cita agregados:\nNombre: ${nombre}\nFecha: ${fechaHora.toLocaleString()}`)

    setNombre('')
    setEmail('')
    setTelefono('')
    setFecha('')
    setHora('')
  }

  return (
    <section>
      <h2>Agregar Nuevo Paciente y Cita</h2>
      <form onSubmit={handleSubmit} className="form-registro">
        <label>
          Nombre completo:
          <input
            type="text"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            placeholder="Nombre del paciente"
            required
          />
        </label>

        <label>
          Correo electrónico:
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="ejemplo@correo.com"
            required
          />
        </label>

        <label>
          Teléfono:
          <input
            type="tel"
            value={telefono}
            onChange={e => setTelefono(e.target.value)}
            placeholder="Opcional"
          />
        </label>

        <label>
          Fecha de la cita:
          <input
            type="date"
            value={fecha}
            onChange={e => setFecha(e.target.value)}
            required
          />
        </label>

        <label>
          Hora de la cita:
          <input
            type="time"
            value={hora}
            onChange={e => setHora(e.target.value)}
            required
            min="06:00"
            max="17:00"
          />
        </label>

        <button type="submit">Agregar Paciente y Cita</button>
      </form>
    </section>
  )
}

export default AgregarPaciente
