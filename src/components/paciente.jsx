const  Paciente = ({pacien, setPaciente, eliminar}) => {
    const {nombre, propietario, correo, alta, sintomas, id} = pacien
    const handleDeleted=()=>{
        const respuesta=confirm('¿Estás seguro que quieres eliminar dicho paciente?')
        if(respuesta){
            eliminar(id)
        }
    }
    return(
        <>
            <div className="w-full mb-4 bg-white shadow-md p-7 rounded-md flex flex-col border border-gray-300">
                <p className="font-bold uppercase mb-3 text-gray-700">Nombre: <span className="normal-case font-normal">{nombre}</span></p>
                <p className="font-bold uppercase mb-3 text-gray-700">Propietario: <span className="normal-case font-normal">{propietario}</span></p>
                <p className="font-bold uppercase mb-3 text-gray-700">Email: <span className="normal-case font-normal">{correo}</span></p>
                <p className="font-bold uppercase mb-3 text-gray-700">Día de Alta: <span className="normal-case font-normal">{alta}</span></p>
                <p className="font-bold uppercase mb-3 text-gray-700">Síntomas: <span className="normal-case font-normal">{sintomas}</span></p>
                <div className="sm:flex grid max-sm:justify-items-center">
                    <button className="botones bg-indigo-600 hover:bg-indigo-800" onClick={()=> setPaciente(pacien)}>Editar</button>
                    <button className="botones bg-red-600 hover:bg-red-800" onClick={handleDeleted}>Eliminar</button>
                </div>
            </div>
            
        </>
    )
}

export default Paciente