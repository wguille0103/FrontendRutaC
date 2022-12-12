import swal from "sweetalert";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const URI = "http://localhost:8080/usuario/";
const Login = () => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState([]);
  const [login_usu, setLogin_usu] = useState("");
  const [clave_usu, setClave_usu] = useState("");
  const [documento_usu, setDocumento_usu] = useState("");
  const guardar = async (e) => {
    e.preventDefault();

    try {
      const res = await axios({
        method: "GET",
        url: URI + "login?usuario=" + login_usu + "&clave=" + clave_usu,
      });
      setUsuario(res.data);

      if (res.data.login_usu == null) {
        swal("Usuario NO Autorizado", "¡Presiona el botón!", "error");
        navigate("/");
      } else {
        sessionStorage.setItem("usuario", login_usu);
        sessionStorage.setItem("clave", clave_usu);
        sessionStorage.setItem("id", documento_usu);
        swal(
          "Bienvenido " + res.data.nombre_usu + "!",
          "¡Presiona el botón!",
          "success"
        );
        navigate("/");
      }
    } catch (error) {
      swal("Operación NO realizada");
    }
  };
  return (
    <div className="container">
      <div className="row" id="centrado">
        <div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
          <form onSubmit={guardar}>
            <fieldset>
              <h2>Ingreso al sistema</h2>
              <hr className="colorgraph" />
              <div className="form-group">
                <input
                  type="text"
                  name="id"
                  id="id"
                  value={login_usu}
                  maxLength={15}
                  required
                  onInvalid={(e) => e.target.setCustomValidity("El campo Usuario es obligatorio")}
                  onInput={(e) => e.target.setCustomValidity("")}
                  class="form-control input-lg" placeholder="Digite el Usuario"
                  onChange={(e) => setLogin_usu(e.target.value)}
                />
              </div>
              <br></br>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={clave_usu}
                  onChange={(e) => setClave_usu(e.target.value)}
                  maxLength={50}
                  required
                  onInvalid={(e) =>
                    e.target.setCustomValidity(
                      "El campo Contraseña  es obligatorio"
                    )
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                  class="form-control input-lg"
                  placeholder="Contraseña"
                />
              </div>
              <br></br>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <input
                    type="submit"
                    className="btn  btn-success btn-block"
                    value="Ingresar"
                  />
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
