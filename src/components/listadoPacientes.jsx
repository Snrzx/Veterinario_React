import Paciente from "./paciente"

const Pacientes = ({pacientes, setPaciente, eliminar}) => {
    
    return(
        <div className="grid justify-items-center self-start w-full px-20">
            <h2 className="font-black text-center text-3xl capitalize">listado de pacientes</h2>
            {pacientes && pacientes.length ?
            <>
            <p className="font-bold text-xl text-center m-4"> Administra tus <span className="text-indigo-600"> Pacientes</span></p>
            {pacientes.map(pacien=>(<Paciente key={pacien.id} pacien={pacien} setPaciente={setPaciente} eliminar={eliminar}/>))}
            </> 
            :
            <>
            <p className="font-bold text-xl text-center m-4">No hay Pacientes <span className="text-indigo-600">Disponibles</span></p>
            </>
            
            }                   
        </div>
    )
}
export default Pacientes 