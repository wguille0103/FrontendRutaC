import "./App.css";
import Menu from "./Components/Menu";
import Login from "./Components/Login";
import Usuario from "./Components/Usuario";
import CrearUsuario from "./Components/CrearUsuario";
import EditarUsuario from "./Components/EditarUsuario";
import Logout from "./Components/Logout";
//import Rutas from "./Components/Rutas";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Menu />

        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/usuario" element={<Usuario />} />
            <Route path="/CrearUsuario" element={<CrearUsuario />} />
            <Route path="/EditarUsuario/:id" element={<EditarUsuario />} />
            <Route path="/logout" element={<Logout />} />            
            {/*<Route path="/rutas" element={<Rutas />} />*/}
            {/* <Route path="/principal" element={<Menu />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
