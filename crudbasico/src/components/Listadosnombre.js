import React,{useState} from 'react'
import uniqid from 'uniqid';

const Listadosnombre = () => {

    const[nombre,setNombre]=useState('');
    const[listanombres,setListanombres]=useState([]);
    const[modoEdicion,setModoEdicion]=useState(false);
    const[id,setId]=useState('');
    const[error,setError]=useState(null);

    const addNombre=(e)=>{
        e.preventDefault();
        if(!nombre.trim()){
            setError("el campo nombre esta vacio")
            return
        }
        const nuevoNombre={
            id:uniqid(),
            tituloNombre:nombre
        }
        setListanombres([...listanombres,nuevoNombre]);
        setNombre('');
       setError(null);
    }

    const deleteNombre=(id)=>{
        const nuevaArray= listanombres.filter(item  => item.id !== id)
        setListanombres(nuevaArray);
    }

    const editar=(item)=>{
        setModoEdicion(true);
        setNombre(item.tituloNombre);
        setId(item.id)
    }

    const editarNombre =(e)=>{
        e.preventDefault();
        const nuevoArray=listanombres
        .map(item => item.id === id ? {id:id,tituloNombre:nombre}:item )
        setListanombres(nuevoArray);
        setModoEdicion(false);
        setNombre('');
    }

    return (
        <div>
            <h2>Aplicacion CRUD basica</h2>
            <div className="row">
                <div className="col">
                    <h2>Listado de nombres</h2>
                    <ul className="list-group">
                        {
                            listanombres.map(item=>
                                <li 
                                    key={item.id} 
                                    className="list-group-item">
                                        {item.tituloNombre}
                                        <button 
                                            onClick={()=>{deleteNombre(item.id)}}
                                            className="btn btn-danger float-right">
                                            Borrar
                                        </button>
                                        <button 
                                            onClick={()=>{editar(item)}}
                                            className="btn btn-info float-right">
                                          Editar
                                        </button>
                                </li>
                                )
                        }
                    </ul>
                </div>
                <div className="col">
                    <h2>Formulario para añadir nombres</h2>
                    <form  onSubmit={modoEdicion ? editarNombre: addNombre} className="form-group">
                        <input 
                            className="form-control mb-3" 
                            type="text" 
                            placeholder="introduce el nombre"
                            onChange={(e)=>{setNombre(e.target.value)}}
                            value={nombre}/>
                        <input  
                            className="btn btn-info btn-block"
                             type="submit" 
                             value={ modoEdicion ? "Editar nombre":"Registrar nombre"}/>
                    </form>
                    {
                        error !=null ? (
                            <div className="alert alert-danger">
                                {error}
                            </div>
                        ):(
                            <div> </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
export default Listadosnombre;