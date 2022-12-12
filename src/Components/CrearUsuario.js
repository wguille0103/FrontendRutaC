import swal from "sweetalert"
import axios from "axios";
import { useState,useEffect }  from "react";
import { useNavigate} from "react-router-dom";
const URI = "http://localhost:8080/usuario/"
const URI1 = "http://localhost:8080/usuario/list"


let headers = {
    "usuario" : sessionStorage.getItem("usuario"),
    "clave"   : sessionStorage.getItem("clave")
  };
const CrearUsuario = () => {
    const [documento_usu, setDocumento_usu] = useState("");
    const [login_usu, setLogin_usu] = useState("");
    const [email_usu, setEmail_usu] = useState("");
    const [tipo_identificacion_usu, setTipo_identificacion_usu] = useState([])
    const [nombre_usu, setNombre_usu] = useState([])
    const [apellido_usu, setApellido_usu] = useState([])
    const [celular_usu, setCelular_usu] = useState([])
    const [genero_usu, setGenero_usu] = useState([])
    const [clave_usu, setClave_usu] = useState([])

    const navigate = useNavigate();
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]

      

    
    const guardar = async (e) => {
        e.preventDefault();

        const insertUsuario = await axios({
            method: "POST",
            url: URI,
            data: {
            //    id_cuenta: id_cuenta, fecha_apertura: fecha_apertura, saldo_cuenta: saldo_cuenta, cliente: {id_cliente: cliente, nombre_cliente: null, clave_cliente: null}
            documento_usu: documento_usu, login_usu: login_usu, email_usu: email_usu, tipo_identificacion_usu: 'CC',
            nombre_usu: nombre_usu, apellido_usu: apellido_usu, celular_usu: celular_usu, genero_usu: 'F', clave_usu: clave_usu 
        },
            headers: headers 
          });
          
         
          console.log('documento_usu', documento_usu );
          console.log('insertUsuario', insertUsuario );
        navigate("/usuario");
      };

    /*  const llenarLista = async () =>{
        try {
            
            const res1 = await axios({
                method : "GET",
                url : URI + "list",
                headers: headers 
               
            });
            
            setDocumento_usu(res1.data)
            
        }
        catch (error) {
            //swal("No tiene Acceso a esta Opción1!", "Presiona el butón!", "error");
            //navigate("/");
        }
    }

    llenarLista();*/

    return(
        <div>
        <br></br>
        <h3>Crear Usuario</h3>
        <div className="container col-6" id="contenedor2">
        <form onSubmit={guardar}>
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

            <div className="mb-3">
            <label className="form-label">Clave</label>
            <input 
                value={clave_usu}
                onChange={(e) => setClave_usu(e.target.value)}
                type="password"
                placeholder="Digite la clave" 
                className="form-control"
                required
                onInvalid={e => e.target.setCustomValidity('El campo clave es obligatorio')}
                onInput={e => e.target.setCustomValidity('')}
            />           
            
            </div>
            
      
            <button type="submit" className="btn btn-warning">
            Guardar
            </button>
           

        </form>
    </div>
    </div>
    );

};

export default CrearUsuario;