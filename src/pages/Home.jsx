
// Este componente muestra la pantalla de bienvenida con instrucciones detalladas para el uso del sistema por parte del doctor.

// Importamos React
import React from 'react'

// Componente funcional Home
const Home = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', color: '#00695c' }}>
        🩺 Plataforma de Gestión de Citas Médicas
      </h1>

      {/* Instrucciones de uso */}
      <section style={{ marginTop: '2rem', backgroundColor: '#f1f1f1', padding: '1.5rem', borderRadius: '10px' }}>
        <h2>👨‍⚕️ Bienvenido, doctor/a</h2>
        <p>Esta plataforma le permite registrar pacientes y administrar sus citas médicas de forma organizada.</p>

        <hr style={{ margin: '1rem 0' }} />

        <h3>📌 ¿Cómo usar la aplicación?</h3>

        <h4>1. Agregar paciente</h4>
        <ul>
          <li>Haz clic en <strong>"Agregar"</strong> en la barra de navegación.</li>
          <li>Llena los campos: nombre, correo, teléfono, fecha y hora.</li>
          <li>La hora debe estar entre <strong>06:00 y 17:00</strong>.</li>
          <li>No se permiten duplicados de citas en la misma fecha y hora.</li>
        </ul>

        <h4>2. Ver citas</h4>
        <ul>
          <li>En la sección <strong>"Ver citas"</strong> se muestran las citas separadas en 3 columnas:</li>
          <ul>
            <li><strong>Hoy</strong></li>
            <li><strong>Mañana</strong></li>
            <li><strong>Pasado mañana</strong></li>
          </ul>
          <li>Cada cita muestra nombre, fecha, hora y un botón para ver más detalles.</li>
        </ul>

        <h4>3. Validaciones del sistema</h4>
        <ul>
          <li>Las citas solo se agendan dentro del rango permitido de horas.</li>
          <li>No puedes registrar dos citas a la misma hora y fecha.</li>
          <li>Se muestra un mensaje si hay conflictos de horario.</li>
        </ul>

        <p style={{ marginTop: '1.5rem', fontStyle: 'italic', color: '#555' }}>
          Gracias por usar nuestra plataforma de gestión de citas médicas.
        </p>
      </section>
    </div>
  )
}

// Exportamos el componente para que pueda ser usado por React Router
export default Home
