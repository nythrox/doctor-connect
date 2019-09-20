import React from 'react';
import LogoAnunciosClean from '../../assets/images/logo-anuncios.png';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function NavbarAnuncios() {
  return (
    <header class="header">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <div class="flex-space">
                        
                        <Link to="/"className="hidden-xs">
                            <img class="img-responsive logo" src={LogoAnunciosClean} alt="Conecta Médico"/>
                        </Link>
                        <Link to="../"className="btn btn-clean btn-icon icon-mob js-back visible-xs">
                            <i class="la la-arrow-left"></i><span>Voltar</span>
                        </Link>
                        <h3>Adicionando um<br/> novo anúncio</h3>
                    </div>
                </div>
            </div>
        </div>
    </header>
  );
}

export default NavbarAnuncios;
