import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import LogoAnunciosClean from '../../assets/images/logo-anuncios-clean.png';
import Avatar from '../../assets/images/avatar.jpg';

function HeaderAnuncios() {
    return (
        <header class="header logado">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="flex-space no-flex-xs">

                            <div class="navbar-header">
                                <div class="flex-space">
                                    <Link to="/">
                                        <img class="img-responsive logo" src={LogoAnunciosClean} alt="Conecta MÃƒÂ©dico" />
                                    </Link>
                                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#menu-topo">
                                        <div class="title">Menu</div>
                                        <div class="group">
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                        </div>
                                    </button>
                                </div>
                            </div>

                            <div class="collapse navbar-collapse" id="menu-topo">
                                <div class="menu-principal">
                                    <ul class="nav">
                                        <li>
                                            <Link to="/auth-anuncio/anuncios/">Anúncios</Link></li>
                                    </ul>
                                    <div class="dropdown">
                                        <a href="javascript:" class="dropdown-toggle flex" data-toggle="dropdown">
                                            Conta
                                </a>
                                        <ul class="dropdown-menu">
                                            <li><Link to="/auth/minha-conta">Minha conta</Link></li>
                                            <li role="separator" class="divider"></li>
                                            <li><a href="./">Sair</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HeaderAnuncios;
