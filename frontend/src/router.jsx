import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastrousuario from "./pages/cadastroUsuario/cadastrousuario.jsx";
import Loginusuario from "./pages/loginUsuario/loginusuario.jsx";
import Inicio from "./pages/inicial/inicio.jsx";
import Loginadm from "./pages/loginAdm/loginadm.jsx";
import CadastroAdm from './pages/cadastroAdm/cadastroadm.jsx'
import Administracao from "./pages/administracao/administracao.jsx";

export default function Navegacao() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Cadastrousuario />} />

        <Route path="/inicio" element={<Inicio />} />

        <Route path="/loginUsuario" element={<Loginusuario />} />

        <Route path="/cadastroAdmin" element={<CadastroAdm />} />


        <Route path="/loginAdmin" element={<Loginadm />} />

        <Route path="/administracao" element={<Administracao />} />

      </Routes>
    </BrowserRouter>
  );
}
