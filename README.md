# Sitio Web de la Clínica Clínica

Este es un proyecto de una aplicación web para la Clínica Clínica, desarrollado con **React** y utilizando **Bootstrap** para el diseño y organización visual. La aplicación incluye módulos para manejar información de doctores, servicios, y para agendar citas.

## Descripción del Proyecto

El sistema web contiene tres secciones principales, en todas se utilizan props para enviar datos entre los componentes:

1. **Equipo Médico:**
   Muestra los detalles del personal médico, como sus especialidades, experiencia y datos de contacto. Cada doctor se representa en una tarjeta que se genera dinámicamente a partir de datos almacenados en el estado del componente principal. Al hacer clic en la tarjeta, se abre un modal con más detalles sobre el doctor seleccionado.

2. **Servicios:**
   Despliega una lista de servicios disponibles en la clínica, que también se carga de forma dinámica desde el estado del componente principal. Al hacer clic en la tarjeta de un servicio, se abre un modal con una descripción del servicio seleccionado.

3. **Formulario de Citas:**  
   Permite a los usuarios agendar citas ingresando el nombre del paciente, el doctor seleccionado y la fecha deseada. Al enviar el formulario, la información se muestra en la consola y en la interfaz.

## Tecnologías Utilizadas

- **React**: Para la creación de componentes y manejo del estado.
- **Bootstrap**: Para el diseño y la estilización responsiva.
- **Node.js y npm**: Para la gestión del proyecto y sus dependencias.
  
Esta vez, **CSS** fue omitido para generar todos los estilos en **React** y **Bootstrap**.

## Funcionalidades Clave

1. **Uso de Hooks**
   - **`useState`**: Maneja el estado de los doctores, servicios y datos del formulario de citas. Almacena y actualiza las citas agendadas en tiempo real.
   - **`useEffect`**: Carga la lista de doctores y servicios al montar el componente principal.

2. **Manejo del Formulario**
   - Validación en el cliente para asegurar que todos los campos estén completos antes de enviar.
   - Muestra las citas agendadas en la interfaz de manera dinámica.

3. **Ciclo de Vida de Componentes**
   - Renderizado condicional para alternar entre las secciones de **Doctores**, **Servicios** y **Formulario de Citas**.

## Estructura del Proyecto

```plaintext
/evaluacion-m4-ej-2
│
├── src/                   
│   ├── assets/              <-- Para recursos estáticos
│   ├── components/ 
│   │   ├── AppointmentForm.jsx
│   │   ├── DoctorCard.jsx
│   │   └── ServiceList.jsx
│   ├── App.jsx              <-- Componente principal
│   ├── main.jsx             <-- Punto de entrada de React
│
├── node_modules/        
├── .gitignore               
├── eslint.config.js        
├── index.html            
├── package.json           
├── package-lock.json     
├── README.md           
└── vite.config.js           
```

## Instrucciones para Visualizar el Proyecto

### Requisitos Previos

- Tener **Node.js**, **npm** e idealmente **Vite** instalados en tu computadora.

### Pasos para Ejecutar el Proyecto

1. Clona el repositorio en tu máquina local:

    ```bash
    git clone <URL del repositorio>
    cd <nombre del repositorio>
    ```

2. Instala las dependencias necesarias:

    ```bash
    npm install
    ```

3. Inicia el servidor de desarrollo (mediante Vite):

    ```bash
    npm run dev
    ```

4. Abre el proyecto en tu navegador en la dirección que se muestre (normalmente http://localhost:5173).

## Autor

- Martín Avendaño