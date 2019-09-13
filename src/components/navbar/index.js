import React from 'react';
import Logo from '../../assets/images/logo.png';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function Navbar() {
  return (
    <header class="header">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <div class="flex-space">
                        
                        <Link to="/"className="hidden-xs">
                            <img class="img-responsive logo" src={Logo} alt="Conecta Médico"/>
                        </Link>
                        <Link to="../"className="btn btn-clean btn-icon icon-mob js-back visible-xs">
                            <i class="la la-arrow-left"></i><span>Voltar</span>
                        </Link>
                        <h3>Marcando<br/> uma teleconsulta</h3>
                    </div>
                </div>
            </div>
        </div>
    </header>
  );
}

export default Navbar;
