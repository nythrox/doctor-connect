import React from 'react';
import Avatar from '../../assets/images/avatar.jpg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
                                    <input type="text" class="form-control" placeholder="Buscar por voucher, data ou médico"/>
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
                                        <div class="card boxHeight">
                                            <Link to="/auth/consultas/realizadas-perfil">
                                                <span class="msg-hidden"><h6>Você recusou a consulta.<br/>Ela foi cancelada.</h6></span>
                                                <div class="item-top flex-space">
                                                    <div class="group-avatar">
                                                        <img src={Avatar} alt="Nome"/>
                                                        <div class="group">
                                                            <h6><strong>Dr. Médico Josival</strong></h6>
                                                            <h6>CRM 123456 SP</h6>
                                                        </div>
                                                    </div>
                                                    <div class="group-avaliar">
                                                        <i class="la la-star"></i>
                                                        <h6>3,0</h6>
                                                    </div>
                                                </div>
                                                <div class="item-center">
                                                    <div class="content flex-space">
                                                        <div class="group">
                                                            <h3>Ortopedia</h3>
                                                            <h6>Consulta: CM45KO6R7</h6>
                                                        </div>
                                                        <div class="group text-right">
                                                            <h6 class="italic">Realizada em<br/> 20 de julho de 2019</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-6 col-md-4">
                                        <div class="card boxHeight">
                                        <Link to="/auth/consultas/realizadas-perfil">
                                                <span class="msg-hidden"><h6>Você recusou a consulta.<br/>Ela foi cancelada.</h6></span>
                                                <div class="item-top flex-space">
                                                    <div class="group-avatar">
                                                        <img src={Avatar} alt="Nome"/>
                                                        <div class="group">
                                                            <h6><strong>Dr. Médico Josival</strong></h6>
                                                            <h6>CRM 123456 SP</h6>
                                                        </div>
                                                    </div>
                                                    <div class="group-avaliar">
                                                        <i class="la la-star"></i>
                                                        <h6>3,0</h6>
                                                    </div>
                                                </div>
                                                <div class="item-center">
                                                    <div class="content flex-space">
                                                        <div class="group">
                                                            <h3>Ortopedia</h3>
                                                            <h6>Consulta: CM45KO6R7</h6>
                                                        </div>
                                                        <div class="group text-right">
                                                            <h6 class="italic">Realizada em<br/> 20 de julho de 2019</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-6 col-md-4">
                                        <div class="card boxHeight">
                                            <Link to="/auth/consultas/realizadas-perfil">
                                                <span class="msg-hidden"><h6>Você recusou a consulta.<br/>Ela foi cancelada.</h6></span>
                                                <div class="item-top flex-space">
                                                    <div class="group-avatar">
                                                        <img src={Avatar} alt="Nome"/>
                                                        <div class="group">
                                                            <h6><strong>Dr. Médico Josival</strong></h6>
                                                            <h6>CRM 123456 SP</h6>
                                                        </div>
                                                    </div>
                                                    <div class="group-avaliar">
                                                        <i class="la la-star"></i>
                                                        <h6>3,0</h6>
                                                    </div>
                                                </div>
                                                <div class="item-center">
                                                    <div class="content flex-space">
                                                        <div class="group">
                                                            <h3>Ortopedia</h3>
                                                            <h6>Consulta: CM45KO6R7</h6>
                                                        </div>
                                                        <div class="group text-right">
                                                            <h6 class="italic">Realizada em<br/> 20 de julho de 2019</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-6 col-md-4">
                                        <div class="card boxHeight">
                                        <Link to="/auth/consultas/realizadas-perfil">
                                                <span class="msg-hidden"><h6>Você recusou a consulta.<br/>Ela foi cancelada.</h6></span>
                                                <div class="item-top flex-space">
                                                    <div class="group-avatar">
                                                        <img src={Avatar} alt="Nome"/>
                                                        <div class="group">
                                                            <h6><strong>Dr. Médico Josival</strong></h6>
                                                            <h6>CRM 123456 SP</h6>
                                                        </div>
                                                    </div>
                                                    <div class="group-avaliar">
                                                        <i class="la la-star"></i>
                                                        <h6>3,0</h6>
                                                    </div>
                                                </div>
                                                <div class="item-center">
                                                    <div class="content flex-space">
                                                        <div class="group">
                                                            <h3>Ortopedia</h3>
                                                            <h6>Consulta: CM45KO6R7</h6>
                                                        </div>
                                                        <div class="group text-right">
                                                            <h6 class="italic">Realizada em<br/> 20 de julho de 2019</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-6 col-md-4">
                                        <div class="card boxHeight">
                                        <Link to="/auth/consultas/realizadas-perfil">
                                                <span class="msg-hidden"><h6>Você recusou a consulta.<br/>Ela foi cancelada.</h6></span>
                                                <div class="item-top flex-space">
                                                    <div class="group-avatar">
                                                        <img src={Avatar} alt="Nome"/>
                                                        <div class="group">
                                                            <h6><strong>Dr. Médico Josival</strong></h6>
                                                            <h6>CRM 123456 SP</h6>
                                                        </div>
                                                    </div>
                                                    <div class="group-avaliar">
                                                        <i class="la la-star"></i>
                                                        <h6>3,0</h6>
                                                    </div>
                                                </div>
                                                <div class="item-center">
                                                    <div class="content flex-space">
                                                        <div class="group">
                                                            <h3>Ortopedia</h3>
                                                            <h6>Consulta: CM45KO6R7</h6>
                                                        </div>
                                                        <div class="group text-right">
                                                            <h6 class="italic">Realizada em<br/> 20 de julho de 2019</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-6 col-md-4">
                                        <div class="card boxHeight">
                                        <Link to="/auth/consultas/realizadas-perfil">
                                                <span class="msg-hidden"><h6>Você recusou a consulta.<br/>Ela foi cancelada.</h6></span>
                                                <div class="item-top flex-space">
                                                    <div class="group-avatar">
                                                        <img src={Avatar} alt="Nome"/>
                                                        <div class="group">
                                                            <h6><strong>Dr. Médico Josival</strong></h6>
                                                            <h6>CRM 123456 SP</h6>
                                                        </div>
                                                    </div>
                                                    <div class="group-avaliar">
                                                        <i class="la la-star"></i>
                                                        <h6>3,0</h6>
                                                    </div>
                                                </div>
                                                <div class="item-center">
                                                    <div class="content flex-space">
                                                        <div class="group">
                                                            <h3>Ortopedia</h3>
                                                            <h6>Consulta: CM45KO6R7</h6>
                                                        </div>
                                                        <div class="group text-right">
                                                            <h6 class="italic">Realizada em<br/> 20 de julho de 2019</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div class="tab-pane" id="nav-2-2">
                                <div class="row">
                                <div class="col-xs-12 col-sm-6 col-md-4">
                                        <div class="card boxHeight">
                                        <Link to="/auth/consultas/realizadas-perfil">
                                                <span class="msg-hidden"><h6>Você recusou a consulta.<br/>Ela foi cancelada.</h6></span>
                                                <div class="item-top flex-space">
                                                    <div class="group-avatar">
                                                        <img src={Avatar} alt="Nome"/>
                                                        <div class="group">
                                                            <h6><strong>Dr. Médico Josival</strong></h6>
                                                            <h6>CRM 123456 SP</h6>
                                                        </div>
                                                    </div>
                                                    <div class="group-avaliar">
                                                        <i class="la la-star"></i>
                                                        <h6>3,0</h6>
                                                    </div>
                                                </div>
                                                <div class="item-center">
                                                    <div class="content flex-space">
                                                        <div class="group">
                                                            <h3>Ortopedia</h3>
                                                            <h6>Consulta: CM45KO6R7</h6>
                                                        </div>
                                                        <div class="group text-right">
                                                            <h6 class="italic">Realizada em<br/> 20 de julho de 2019</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-6 col-md-4">
                                        <div class="card boxHeight">
                                        <Link to="/auth/consultas/realizadas-perfil">
                                                <span class="msg-hidden"><h6>Você recusou a consulta.<br/>Ela foi cancelada.</h6></span>
                                                <div class="item-top flex-space">
                                                    <div class="group-avatar">
                                                        <img src={Avatar} alt="Nome"/>
                                                        <div class="group">
                                                            <h6><strong>Dr. Médico Josival</strong></h6>
                                                            <h6>CRM 123456 SP</h6>
                                                        </div>
                                                    </div>
                                                    <div class="group-avaliar">
                                                        <i class="la la-star"></i>
                                                        <h6>3,0</h6>
                                                    </div>
                                                </div>
                                                <div class="item-center">
                                                    <div class="content flex-space">
                                                        <div class="group">
                                                            <h3>Ortopedia</h3>
                                                            <h6>Consulta: CM45KO6R7</h6>
                                                        </div>
                                                        <div class="group text-right">
                                                            <h6 class="italic">Realizada em<br/> 20 de julho de 2019</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div class="tab-pane" id="nav-2-3">
                                <div class="row">
                                <div class="col-xs-12 col-sm-6 col-md-4">
                                        <div class="card boxHeight">
                                        <Link to="/auth/consultas/realizadas-perfil">
                                                <span class="msg-hidden"><h6>Você recusou a consulta.<br/>Ela foi cancelada.</h6></span>
                                                <div class="item-top flex-space">
                                                    <div class="group-avatar">
                                                        <img src={Avatar} alt="Nome"/>
                                                        <div class="group">
                                                            <h6><strong>Dr. Médico Josival</strong></h6>
                                                            <h6>CRM 123456 SP</h6>
                                                        </div>
                                                    </div>
                                                    <div class="group-avaliar">
                                                        <i class="la la-star"></i>
                                                        <h6>3,0</h6>
                                                    </div>
                                                </div>
                                                <div class="item-center">
                                                    <div class="content flex-space">
                                                        <div class="group">
                                                            <h3>Ortopedia</h3>
                                                            <h6>Consulta: CM45KO6R7</h6>
                                                        </div>
                                                        <div class="group text-right">
                                                            <h6 class="italic">Realizada em<br/> 20 de julho de 2019</h6>
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
    
                </div>
            </div>
        </section>
        </div>
    );
}

export default ConsultasRealizadas;
