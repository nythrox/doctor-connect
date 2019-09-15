import React from 'react';
import Avatar from '../../assets/images/avatar.jpg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MedicoCardPerfil from '../../components/medico-card-perfil';

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
                                        <input type="text" class="form-control" placeholder="Buscar por nome, CRM ou especialidade" />
                                        <i class="la la-search"></i>
                                    </div>
                                </div>
                            </div>

                            <div class="row mh-col-xs">
                                <div class="col-xs-12 col-sm-6 col-md-4">
                                    <MedicoCardPerfil compartilhandoConsultas={true} nome="Dr. Médico Josival" crm="123456" estado="SP" profissao="Ortopedista" codConsulta="CM45KO6R7" dataRealizada="20 de julho de 2019" />
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-4">
                                    <MedicoCardPerfil compartilhandoConsultas={false} nome="Dr. Médico Josival" crm="123456" estado="SP" profissao="Ortopedista" codConsulta="CM45KO6R7" dataRealizada="20 de julho de 2019" />
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
