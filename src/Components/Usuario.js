import swal from "sweetalert"
import axios from "axios";
import { useState,useEffect }  from "react";
import { Link,useNavigate} from "react-router-dom";

const URI = "http://localhost:8080/usuario/"

let headers = {
    "usuario" : sessionStorage.getItem("usuario"),
    "clave"   : sessionStorage.getItem("clave")
  };

 const id = sessionStorage.getItem("usuario");
const Usuario = () => {
    //Para validar que el ususario este logueado
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState([])
    useEffect(() =>{
        getUsusario()
    })
    const getUsusario = async () =>{
        try {
            
            const res = await axios({
                method : "GET",
                //url : URI + "consulta_usuario="+sessionStorage.getItem("usuario"),
                url : URI + "list"+sessionStorage.getItem("id"),               
                headers: headers  
            });
                setUsuario(res.data)
        }
        catch (error) {
            swal("No tiene Acceso a esta Opción!", "Presiona el butón!", "error");
            navigate("/");
        }
    }

    const deleteUsuario = async (id) => {
        swal(
            {
                title: "Eliminar Registro",
                text: "Está seguro de eliminar registro?",
                icons: "Warning",
                buttons: true,
                dangerMode: true,
            })
            .then(async (willDelete) =>{
                if (willDelete){
                    const res = await axios({
                        method: "DELETE",
                        url: URI + id,
                        headers: headers 
                    });
                    swal("El resgistro se eliminó satisfactoriamente",{ 
                        icon: "success",
                    });
                    getUsusario()
                } else{
                    swal("El registro no se borró")
                }
            });
        
    }

    return (
        
        <div className='container'>
        <div className='row'>
            <div className='col'>
                <br></br>
                <br></br>
                <h2>Registro Usuario </h2>
                <br></br>                
                <Link to={`/CrearUsuario`} >Crear usuario <i className="fa-solid fa-user"  
                data-toggle="tooltip" title="Registro de Ususario" id="usuario"></i></Link>                 
              <br></br>
              <br></br>
                <table className="table table-striped table-hover">
                    <thead className="table-dark">
                    <tr>                
                        <th scope="col">Login</th>
                        <th scope="col">Documento</th>                                              
                        <th scope="col">Nombres</th>
                        <th scope="col">Apellidos</th>
                        <th scope="col">Celular</th>                       
                        <th scope="col">Genero</th>                     
                        <th scope="col">Email</th> 
                        <th scope="col">Editar</th> 
                        <th scope="col">Eliminar</th> 
                   </tr>
                    </thead> 
                    <tbody>
                    { usuario.map ( (usuario) => (
                        <tr key={ usuario.documento_usu }>
                            <td>{ usuario.login_usu } </td>
                            <td>{ usuario.documento_usu } </td>
                            <td>{ usuario.nombre_usu } </td>
                            <td>{ usuario.apellido_usu } </td>
                            <td>{ usuario.celular_usu } </td>
                            <td>{ usuario.genero_usu } </td>                           
                            <td>{ usuario.email_usu } </td>

                            <td>
                            <Link to={`/EditarUsuario/${usuario.documento_usu}`} ><i className="fa-solid fa-pen-clip" data-toggle="tooltip" title="Editar" id="usuarioEdit"></i></Link>   
                            </td>
                            <td>                            
                            <button id="boton1" onClick={() => deleteUsuario(usuario.documento_usu)} className='btn btn-danger'><i className="fa-solid fa-trash" data-toggle="tooltip" title="Eliminar" id="eliminar"></i></button>                           
                            </td>
                        </tr>
                     )) }      
                    </tbody>   
                </table>


                
            </div>    
        </div>
    </div>



    );
  };
  
  export default Usuario;