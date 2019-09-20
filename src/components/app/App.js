import React from 'react';
import './App.css';
import Homepage from '../../routes/homepage';
import Navbar from '../navbar';
import HeaderLoggedIn from '../headerLoggedIn';
import MarcarConsulta1 from '../../routes/marcar-consulta-1'
import MarcarConsulta2 from '../../routes/marcar-consulta-2'
import MarcarConsulta3 from '../../routes/marcar-consulta-3'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import MarcarConsulta4 from '../../routes/marcar-consulta-4';
import MarcarConsulta4Confirmacao from '../../routes/marcar-consulta-4-confirmacao';
import RecuperarSenha from '../../routes/recuperar-senha';
import ConsultasMarcadas from '../../routes/consultas-marcadas';
import ConsultasRealizadas from '../../routes/consultas-realizadas';
import MarcarConsultaPagamento from '../../routes/marcar-consulta-pagamento';
import MinhaConta from '../../routes/minha-conta';
import MedicoPerfil from '../../routes/medico-perfil';
import MeusMedicos from '../../routes/meus-medicos';
import ConsultasPerfil from '../../routes/consultas-perfil';
import ConsultasRealizadasPerfil from '../../routes/consultas-realizadas-perfil';
import Anuncios from '../../routes/anuncios';
import HeaderAnuncios from '../headerAnuncios';
import AnunciosInt from '../../routes/anunciosInt';
import NavbarAnuncios from '../navbar-anuncios';
import CriarAnuncio1 from '../../routes/criar-anuncios-1';
import CriarAnuncio2 from '../../routes/criar-anuncios-2';
import CriarAnuncio3 from '../../routes/criar-anuncios-3';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Route exact path="/" component={Homepage} />
        <Route exact path="/recuperar-senha" component={RecuperarSenha} />


        {/* tudo no marcar-consulta pra preservar o menu ao trocar de pagina */}
        <Route path="/marcar-consulta" component={Navbar} />
        <Switch>
          <Route path="/marcar-consulta/1" component={MarcarConsulta1} />
          <Route path="/marcar-consulta/2" component={MarcarConsulta2} />
          <Route path="/marcar-consulta/3" component={MarcarConsulta3} />
          <Route path="/marcar-consulta/4" component={MarcarConsulta4} />
        </Switch>


        <Route path="/criar-anuncio" component={NavbarAnuncios} />
        <Switch>
          <Route path="/criar-anuncio/1" component={CriarAnuncio1} />
          <Route path="/criar-anuncio/2" component={CriarAnuncio2} />
          <Route path="/criar-anuncio/3" component={CriarAnuncio3} />
          <Route path="/criar-anuncio/4" component={MarcarConsulta4} />
        </Switch>

        <Route path="/auth-anuncio/" component={HeaderAnuncios} />
        <Switch>
          <Route path="/auth-anuncio/anuncios/" component={Anuncios} />
          <Route path="/auth-anuncio/anuncios-int/" component={AnunciosInt} />
        </Switch>

        {/* por enquanto eu deixei todas as paginas com o menu logado no /auth, depois podemos ver no state se esta logado ou nao */}
        <Route path="/auth" component={HeaderLoggedIn} />
        <Switch>
          <Route path="/auth/medico-perfil" component={MedicoPerfil} />
          <Route path="/auth/meus-medicos" component={MeusMedicos} />
          <Route path="/auth/minha-conta" component={MinhaConta} />
          <Route path="/auth/marcar-consulta-4-confirmacao" component={MarcarConsulta4Confirmacao} />
          <Route path="/auth/consultas/marcadas" component={ConsultasMarcadas} />
          <Route path="/auth/consultas/marcadas-perfil/:id" component={ConsultasPerfil} />
          <Route path="/auth/consultas/realizadas-perfil" component={ConsultasRealizadasPerfil} />
          <Route path="/auth/consultas/marcar-pagamento" component={MarcarConsultaPagamento} />
          <Route path="/auth/consultas/realizadas" component={ConsultasRealizadas} />
        </Switch>

        
      </div>
    </Router>
  );
}

export default App;
