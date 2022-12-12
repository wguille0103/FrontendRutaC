
import axios from "axios";
import { useState,useEffect }  from "react";
import { useNavigate, useParams} from "react-router-dom";
const URI = "http://localhost:8080/usuario/"

let headers = {
    "usuario" : sessionStorage.getItem("usuario"),
    "clave"   : sessionStorage.getItem("clave")
  };
const EditarUsuario = () => {
    const [documento_usu, setDocumento_usu] = useState("");
    const [login_usu, setLogin_usu] = useState("");
    const [email_usu, setEmail_usu] = useState("");
    const [tipo_identificacion_usu, setTipo_identificacion_usu] = useState([]);
    const [nombre_usu, setNombre_usu] = useState([]);
    const [apellido_usu, setApellido_usu] = useState([]);
    const [celular_usu, setCelular_usu] = useState([]);
    const [genero_usu, setGenero_usu] = useState([]);
    const [clave_usu, setClave_usu] = useState([]);
    const navigate = useNavigate();

    const {id} = useParams()

    const editar = async (e) => {
        e.preventDefault();
    
        const EditarUsuario = await axios({
            method: "PUT",
            url: URI,
            data: {
                documento_usu: documento_usu, login_usu: login_usu, email_usu: email_usu, tipo_identificacion_usu: 'CC',
                nombre_usu: nombre_usu, apellido_usu: apellido_usu, celular_usu: celular_usu, genero_usu: 'F', clave_usu: clave_usu 
            },
            headers: headers 
          });
         
        navigate("/usuario");
      };

      useEffect( ()=>{
        getClienteById()
    },[])

    const getClienteById = async () => {

        const res =  await axios({
            method: "GET",
            url: URI+"list/"+id,
            headers: headers 
          });
          setDocumento_usu(res.data.documento_usu)
          setLogin_usu(res.data.login_usu)
          setEmail_usu(res.data.email_usu)
          setTipo_identificacion_usu(res.data.tipo_identificacion_usu)
          setNombre_usu(res.data.nombre_usu)
          setApellido_usu(res.data.apellido_usu)
          setCelular_usu(res.data.celular_usu)
          setGenero_usu(res.data.genero_usu)
          setClave_usu(res.data.clave_usu)

    }

    return(
        <div>
        <br></br>
        <h3>Editar Usuario</h3>
        <div className="container col-6" id="contenedor2">
        <form onSubmit={editar}>
            <div className="mb-3">
            <label className="form-label">Documento: </label>
            <input 
                value={documento_usu}
                onChange={(e) => setDocumento_usu(e.target.value)}
                type="text"
                placeholder="Digite el Documento" 
                className="form-control"
                required
                onInvalid={e => e.target.setCustomValidity('El campo documento  es obligatorio')}
                onInput={e => e.target.setCustomValidity('')}

            />
            </div>
            <div className="mb-3">
            <label className="form-label">Login</label>
            <input 
                value={login_usu}
                onChange={(e) => setLogin_usu(e.target.value)}
                type="text"
                placeholder="Digite el login" 
                className="form-control"
                required
                onInvalid={e => e.target.setCustomValidity('El campo login es obligatorio')}
                onInput={e => e.target.setCustomValidity('')}
            />           
            
            </div>
            <div className="mb-3">
            <label className="form-label">Email</label>
            <input 
                value={email_usu}
                onChange={(e) => setEmail_usu(e.target.value)}
                type="text"
                placeholder="Digite el email" 
                className="form-control"
                required
                onInvalid={e => e.target.setCustomValidity('El campo email es obligatorio')}
                onInput={e => e.target.setCustomValidity('')}
            />           
            
            </div>
            <div className="mb-3">
            <label className="form-label">Tipo identificacion</label>
            <select
                value={tipo_identificacion_usu}
                onChange={(e) => setTipo_identificacion_usu(e.target.value)}
                className="form-control"              
                >
                <option value="cc">CC</option>
                <option value="ce">CE</option>
            </select>
            </div>

            <div className="mb-3">
            <label className="form-label">Nombres</label>
            <input 
                value={nombre_usu}
                onChange={(e) => setNombre_usu(e.target.value)}
                type="text"
                placeholder="Digite el nombre" 
                className="form-control"
                required
                onInvalid={e => e.target.setCustomValidity('El campo nombre es obligatorio')}
                onInput={e => e.target.setCustomValidity('')}
            />           
            
            </div>

            <div className="mb-3">
            <label className="form-label">Apellidos</label>
            <input 
                value={apellido_usu}
                onChange={(e) => setApellido_usu(e.target.value)}
                type="text"
                placeholder="Digite el apellido" 
                className="form-control"
                required
                onInvalid={e => e.target.setCustomValidity('El campo apellido es obligatorio')}
                onInput={e => e.target.setCustomValidity('')}
            />           
            
            </div>

            <div className="mb-3">
            <label className="form-label">Celular</label>
            <input 
                value={celular_usu}
                onChange={(e) => setCelular_usu(e.target.value)}
                type="number"
                placeholder="Digite el celular" 
                className="form-control"
                required
                onInvalid={e => e.target.setCustomValidity('El campo celular es obligatorio')}
                onInput={e => e.target.setCustomValidity('')}
            />           
            
            </div>

            <div className="mb-3">
            <label className="form-label">Genero</label>
            <select
                value={genero_usu}
                onChange={(e) => setGenero_usu(e.target.value)}
                className="form-control"              
                >
                <option value="cc">F</option>
                <option value="ce">M</option>
            </select>
            </div>
                      
      
            <button type="submit" className="btn btn-warning">
            Guardar
            </button>
           

        </form>
    </div>
    </div>
    );
};

export default EditarUsuario
;