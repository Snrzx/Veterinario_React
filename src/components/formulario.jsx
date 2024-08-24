import { useState, useEffect } from "react"
import Error from "./error"

function Formulario({pacientes, setPacientes, pacien, setPaciente}){
    // Apartado de Variables
    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [correo, setCorreo] = useState('')
    const [alta, setAlta] = useState('')
    const [sintomas, setSintomas] = useState('')
    const [error, setError] = useState('')

    // Función que se encarga de no crear re-renders innecesarios
    useEffect(()=>{
        if(Object.keys(pacien).length>0){
            setNombre(pacien.nombre)
            setPropietario(pacien.propietario)
            setCorreo(pacien.correo)
            setAlta(pacien.alta)
            setSintomas(pacien.sintomas)
        }
    
    },[pacien])
    
    // Función que crea un ID improvisado para los componentes.
    const generarId=()=>{
        const fecha= Date.now().toString(36)
        const random= Math.random().toString(36).substring(2)
        return random+fecha
    }

    // Función que ejecutará distintas tareas al oprimir el botón del input.
    const handleSubmit = (e)=> {
        e.preventDefault()
        
        // Condicional que permite validar que todos los campos han sido rellenados.
        if ( [nombre, propietario, correo, alta, sintomas].includes('') ){
            
            setError(true)
            return
        } setError(false)

        const objetoPaciente={
            nombre,
            propietario,
            correo,
            alta,
            sintomas
        }

        // Condicional que permite editar la información de un paciente por medio de su ID; o añadir un paciente.
        // En caso de que el "pacien.id" exista, 
        // Entonces se verifica que "pacienteState.id" coincida con el de "pacien.id", y en dado caso, se reemplaza el listado de pacientes con "newPacientes"
        // En caso contrario, no se modifica el listado de pacientes. 
        // Si el "pacien.id" no existe, significa que se está creando un nuevo paciente; por lo que se le asigna un nuevo ID y se agrega a la lista.
        if(pacien.id){
            objetoPaciente.id=pacien.id

            const newPacientes= pacientes.map(pacienteState=>pacienteState.id===pacien.id ? objetoPaciente : pacienteState)

            setPacientes(newPacientes)
            setPaciente({})
        }
        else{
            objetoPaciente.id=generarId();
            setPacientes([...pacientes, objetoPaciente]);
        }
        // Por último, se setean las siguientes variables.
        setNombre('')
        setPropietario('')
        setCorreo('')
        setAlta('')
        setSintomas('')
    }
    return(
        <>
            <div className="sm:sticky top-7 px-4 w-full grid justify-items-center">
                <h2 className="font-black text-3xl text-center">Seguimiento de Pacientes</h2>

                <p className="text-lg text-center font-bold p-4">Añade a tus <span className="text-indigo-600">Pacientes</span></p>

                <form className="bg-white shadow-2xl rounded-md p-4 grid max-sm:mb-5 sm:w-[16em] md:w-[20em] lg:w-[25em]" onSubmit={handleSubmit}>
                    {error && <Error>todos los campos son obligatorios</Error>}

                    <div>
                        <label htmlFor="mascota" className="label">Nombre del paciente
                        <input id="mascota" className="campo" type="text" value={nombre} onChange={ (e) => setNombre(e.target.value) } placeholder="Nombre de la Mascota"/>
                        </label>
                    </div>

                    <div>
                        <label htmlFor="propietario" className="label">Nombre del Propietario 
                        <input id="propietario" className="campo" type="text" value={propietario} onChange={ (e) => setPropietario(e.target.value)} placeholder="Nombre del Propietario"/>
                        </label>
                    </div>

                    <div>
                        <label htmlFor="correo" className="label">Dirección de Correo 
                        <input id="correo" className="campo" type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} placeholder="Correo Electrónico"/>
                        </label>
                    </div>
                    
                    <div>
                        <label htmlFor="alta" className="label">Alta 
                        <input id="alta" value={alta} onChange={(e) => setAlta(e.target.value)} className="campo text-black" type="date"/>
                        </label>
                    </div>

                    <div>
                        <label htmlFor="sintomas" className="label">Síntomas</label>
                        <textarea id="sintomas" placeholder="Describa los Síntomas" value={sintomas} onChange={(e)=> setSintomas(e.target.value)} className="campo"></textarea>
                    </div>
                    <input type="submit" className="botones mt-3 place-self-center bg-indigo-600 hover:bg-indigo-800 cursor-pointer" value={pacien.id? "Editar Paciente":"Agregar Paciente"}/>
                </form>
            </div>
        </>
    )
}

export default Formulario