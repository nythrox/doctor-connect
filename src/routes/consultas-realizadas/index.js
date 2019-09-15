import React from 'react';
import Avatar from '../../assets/images/avatar.jpg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MedicoCardConsultaRealizada from '../../components/medico-card-consulta-realizada';
function ConsultasRealizadas() {
    return (
        <div>
            <section class="tab-header pb-tab">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="flex-space mb-10">
                                <h1>Consultas</h1>
                                <Link to="/auth/consultas/marcar-pagamento" className="btn btn-line">Marcar consulta</Link>
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
                                <li><Link to="./marcadas">Marcadas</Link></li>
                                <li class="active"><Link to="./realizadas">Realizadas</Link></li>
                            </ul>
                        </div>
                        <div class="col-xs-12 mt-30">
                            <div class="header-main">
                                <div class="flex-space no-flex-xs">
                                    <div class="title">
                                        <h6>Confira o histórico das consultas já realizadas.</h6>
                                    </div>
                                    <div class="box-search">
                                        <input type="text" class="form-control" placeholder="Buscar por voucher, data ou médico" />
                                        <i class="la la-search"></i>
                                    </div>
                                </div>
                            </div>

                            <ul class="nav nav-tab tab-small tab-scroll-mob border-bottom">
                                <li class="active"><a href="#nav-2-1" data-toggle="tab">Todos</a></li>
                                <li><a href="#nav-2-2" data-toggle="tab">Esta semana</a></li>
                                <li><a href="#nav-2-3" data-toggle="tab">Este mês</a></li>
                            </ul>

                            <div class="tab-content">

                                <div class="tab-pane active" id="nav-2-1">
                                    <div class="row">
                                        <div class="col-xs-12 col-sm-6 col-md-4">
                                            <MedicoCardConsultaRealizada nome="Dr. Médico Josival" crm="123456" estado="SP" tituloConsulta="Ortopedia" codConsulta="CM45KO6R7" dataRealizada="20 de julho de 2019" />
                                        </div>
                                        <div class="col-xs-12 col-sm-6 col-md-4">
                                            <MedicoCardConsultaRealizada nome="Dr. Médico Josival" crm="123456" estado="SP" tituloConsulta="Ortopedia" codConsulta="CM45KO6R7" dataRealizada="20 de julho de 2019" />
                                        </div>
                                        <div class="col-xs-12 col-sm-6 col-md-4">
                                            <MedicoCardConsultaRealizada nome="Dr. Médico Josival" crm="123456" estado="SP" tituloConsulta="Ortopedia" codConsulta="CM45KO6R7" dataRealizada="20 de julho de 2019" />
                                        </div>
                                        <div class="col-xs-12 col-sm-6 col-md-4">
                                            <MedicoCardConsultaRealizada nome="Dr. Médico Josival" crm="123456" estado="SP" tituloConsulta="Ortopedia" codConsulta="CM45KO6R7" dataRealizada="20 de julho de 2019" />
                                        </div>
                                        <div class="col-xs-12 col-sm-6 col-md-4">
                                            <MedicoCardConsultaRealizada nome="Dr. Médico Josival" crm="123456" estado="SP" tituloConsulta="Ortopedia" codConsulta="CM45KO6R7" dataRealizada="20 de julho de 2019" />
                                        </div>
                                    </div>
                                </div>

                                <div class="tab-pane" id="nav-2-2">
                                    <div class="row">
                                        <div class="col-xs-12 col-sm-6 col-md-4">
                                            <MedicoCardConsultaRealizada nome="Dr. Médico Josival" crm="123456" estado="SP" tituloConsulta="Ortopedia" codConsulta="CM45KO6R7" dataRealizada="20 de julho de 2019" />
                                        </div>

                                        <div class="col-xs-12 col-sm-6 col-md-4">
                                            <MedicoCardConsultaRealizada nome="Dr. Médico Josival" crm="123456" estado="SP" tituloConsulta="Ortopedia" codConsulta="CM45KO6R7" dataRealizada="20 de julho de 2019" />
                                        </div>

                                    </div>
                                </div>

                                <div class="tab-pane" id="nav-2-3">
                                    <div class="row">

                                        <div class="col-xs-12 col-sm-6 col-md-4">
                                            <MedicoCardConsultaRealizada nome="Dr. Médico Josival" crm="123456" estado="SP" tituloConsulta="Ortopedia" codConsulta="CM45KO6R7" dataRealizada="20 de julho de 2019" />
                                        </div>

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

export default ConsultasRealizadas;
