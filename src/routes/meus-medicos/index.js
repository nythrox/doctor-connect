import React from 'react';
import Avatar from '../../assets/images/avatar.jpg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function MeusMedicos() {
    return (
        <div>
        <section class="tab-header pb-tab">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="flex-space mb-10">
                            <h1>Meus Médicos</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
        <section class="tab-line mod-2">
            <div class="container">
                <div class="row">
    
                    <div class="col-xs-12 pr-mob-0">
                        <ul class="nav nav-tab tab-scroll-mob">
                            <li class="active"><a href="meus-medicos.php">Todos</a></li>
                        </ul>
                    </div>
                    <div class="col-xs-12 mt-30">
                        <div class="header-main">
                            <div class="flex-end no-flex-xs">
                                <div class="box-search">
                                    <input type="text" class="form-control" placeholder="Buscar por nome, CRM ou especialidade"/>
                                    <i class="la la-search"></i>
                                </div>
                            </div>
                        </div>

                        <div class="row mh-col-xs">
                            <div class="col-xs-12 col-sm-6 col-md-4">
                                <div class="card boxHeight">
                                    <Link to="/auth/medico-perfil">
                                        <div class="item-top flex-space">
                                            <div class="group-avatar">
                                                <img src={Avatar} alt="Nome"/>
                                                <div class="group">
                                                    <h3>Dr. Médico Josival</h3>
                                                    <h6><strong>Ortopedista</strong></h6>
                                                    <h6>CRM 123456 SP</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="item-center">
                                            <div class="content flex-space">
                                                <div class="group">
                                                    <h6 class="italic">Ultima consulta<br/> 20 de julho de 2019</h6>
                                                </div>
                                                <div class="group text-right">
                                                    <h6 class="success">Compartilhando<br/> consultas</h6>
                                                </div>
                                            </div>
                                        </div></Link>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-4">
                                <div class="card boxHeight">
                                    <Link to="/auth/medico-perfil">
                                        <div class="item-top flex-space">
                                            <div class="group-avatar">
                                                <img src={Avatar} alt="Nome"/>
                                                <div class="group">
                                                    <h3>Dr. Médico Josival</h3>
                                                    <h6><strong>Ortopedista</strong></h6>
                                                    <h6>CRM 123456 SP</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="item-center">
                                            <div class="content flex-space">
                                                <div class="group">
                                                    <h6 class="italic">Ultima consulta<br/> 20 de julho de 2019</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
    
                </div>
            </div>
        </section>
    
        </div>
    );
}

export default MeusMedicos;
