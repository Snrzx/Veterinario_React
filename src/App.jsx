import { useState, useEffect } from 'react'
import Header from "./components/header"
import Formulario from './components/formulario'
import Pacientes from './components/listadoPacientes'

function App() {
  // Apartado de Variables
  const [pacientes, setPacientes] = useState(localStorage.getItem('pacientes') ? JSON.parse(localStorage.getItem('pacientes')) : [])
  const [pacien, setPaciente] = useState({})
  
  // Función que se encarga de leer el listado de pacientes de pacientes almacenado.
  //
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes) ?? []);
  }, [pacientes]);

  // Función que se encarga de borrar un paciente.
  const eliminar = id => {
    const newPacientes=pacientes.filter( pacien=> pacien.id !== id);
    setPacientes([...newPacientes])

  }
  return (
    <>
      <div className='h-full w-full'>
        <Header/>
        <div className='sm:flex'>
          <div className='sm:w-2/6 m-5'>
            <Formulario
            pacien={pacien}
            pacientes={pacientes}
            setPacientes={setPacientes}
            setPaciente={setPaciente}
            />
          </div>
            
          <div className='sm:flex sm:w-2/3 place-content-end mt-5 w-full'>
            <Pacientes es pacientes={pacientes} setPaciente={setPaciente} eliminar={eliminar}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
