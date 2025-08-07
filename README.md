# 🩺 Plataforma de Gestión de Citas Médicas

Esta es una SPA (Single Page Application) creada con **React + Vite**, diseñada para ayudar a doctores a organizar y gestionar sus citas médicas de forma efectiva. Utiliza `react-router-dom` para el manejo de rutas estáticas y dinámicas.

## 🚀 Tecnologías utilizadas

- React
- Vite
- React Router DOM
- HTML + CSS (estilo personalizado tipo IMSS)
- JavaScript (ES6+)

---

## 📸 Capturas de pantalla

### 🏠 Pantalla de inicio con instrucciones detalladas

![Inicio con instrucciones](https://i.postimg.cc/Wb9KCPwq/1.png)

### 🧾 Formulario para agregar pacientes y agendar citas

![Formulario Agregar](https://i.postimg.cc/pTt1zVR4/2.png)

### 📅 Vista de citas por día (Hoy, Mañana, Pasado Mañana)

![Ver Citas](https://i.postimg.cc/sxj6HnBJ/3.png)

### 📄 Detalle individual de una cita

![Detalle de cita](https://i.postimg.cc/RCdbJz8p/4.png)

---

## 📌 Funcionalidades

- ✅ Página de inicio con instrucciones para el doctor.
- ✅ Registro de pacientes y asignación de fecha y hora.
- ✅ Validación para evitar duplicación de horarios.
- ✅ Horario permitido: **6:00 a 17:00**.
- ✅ Separación automática de citas por día (hoy, mañana, pasado mañana).
- ✅ Vista detallada de cada cita.
- ✅ Navegación entre páginas sin recargar (SPA).

---

## 🧑‍⚕️ Instrucciones de uso

1. Haz clic en **"Agregar"** en la barra de navegación.
2. Llena los campos del formulario:
   - Nombre del paciente
   - Correo
   - Teléfono
   - Fecha (obligatoria)
   - Hora (entre 06:00 y 17:00)
3. Presiona **"Registrar paciente"**.
4. La cita se agregará automáticamente a la sección **"Ver citas"**, organizada por día.
5. Haz clic en cualquier cita para ver más detalles.

---

## 🔧 Estructura del proyecto
## Estructura del Proyecto

```plaintext
src/
├── App.jsx
├── main.jsx
├── style/
│   └── index.css
├── pages/
│   ├── Home.jsx
│   ├── AgregarPaciente.jsx
│   ├── VerCitas.jsx
│   ├── CitaDetalle.jsx
│   └── NotFound.jsx
```

