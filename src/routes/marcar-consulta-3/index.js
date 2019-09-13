import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Avatar from '../../assets/images/avatar.jpg';
function MarcarConsulta3() {
    return (
        <div>
            <section class="box-tab-top">
                <div class="container">
                    <div class="row">
                        <div class="flex-top">
                            <div class="col-xs-12 col-sm-3 col-md-2 hidden-xs">
                                <Link to="/marcar-consulta/2" className="btn btn-clean btn-icon js-back">
                                    <i class="la la-arrow-left"></i><span>Voltar</span>
                                </Link>
                            </div>
                            <div class="col-xs-12 col-sm-9 col-md-10">
                                <div class="group-tabs">
                                    <div class="item active">
                                        <h6>Plano de Saúde</h6>
                                        <h6 class="active">Plano de Saúde</h6>
                                    </div>
                                    <div class="item active">
                                        <h6>Localização</h6>
                                        <h6 class="active">Novo Brooklin - São Paulo</h6>
                                    </div>
                                    <div class="item active">
                                        <h6>Profissional</h6>
                                    </div>
                                    <div class="item">
                                        <h6>Pagamento</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <main class="main">
                <div class="container">
                    <div class="row">

                        <div class="col-xs-12 mb-20">
                            <h1>Profissional de: Ortopedia</h1>
                            <h6 class="mt-5 hidden-xs">Abaixo confira o resultado dos profissionais encontrados na área selecionada anteriormente</h6>
                        </div>

                        <div class="col-xs-12 col-sm-6 col-md-4">
                            <div class="card boxHeight">
                                <a href="#!" data-toggle="modal" data-target="#modal-informacoes">
                                    <div class="item-top flex-space">
                                        <div class="group-avatar">
                                            <img src={Avatar} alt="Nome" />
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
                                        <h6>Avenida da Aclimação, 56<br />
                                            Aclimação - São Paulo</h6>
                                    </div>
                                </a>
                                <div class="item-bottom border-top">
                                    <div class="content flex-space">
                                        <Link to="/marcar-consulta/4" className="btn btn-large">
                                            Agendar
                                    </Link>
                                        <div class="group text-right">
                                            <h6><strong class="success">R$ 70,99</strong></h6>
                                            <h6 class="italic">a consulta</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xs-12 col-sm-6 col-md-4">
                            <div class="card boxHeight">
                                <a href="#!" data-toggle="modal" data-target="#modal-informacoes">
                                    <div class="item-top flex-space">
                                        <div class="group-avatar">
                                            <img src={Avatar} alt="Nome" />
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
                                        <h6>Avenida da Aclimação, 56<br />
                                            Aclimação - São Paulo</h6>
                                    </div>
                                </a>
                                <div class="item-bottom border-top">
                                    <div class="content flex-space">

                                        <Link to="/marcar-consulta/4" className="btn btn-large">Agendar</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
            <div id="modal-informacoes" class="modal" tabindex="-1" role="dialog">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content js-fullheight-mob">
                        <div class="modal-header">
                            <div class="flex-space">
                                <div class="group-avatar">
                                    <img src={Avatar} alt="Nome" />
                                    <div class="group">
                                        <h3>Dr. Médico Josival</h3>
                                    </div>
                                </div>
                                <div class="group-avaliar box-right">
                                    <i class="la la-star"></i>
                                    <h6>3,0</h6>
                                </div>
                            </div>
                            <button type="button" class="close" data-dismiss="modal">
                                <i class="la la-times"></i>
                            </button>
                        </div>
                        <div class="modal-body">
                            <article>
                                <div class="col-xs-12 col-sm-6">
                                    <h3 class="mb-20">Sobre o médico</h3>
                                    <div class="group-flex-h mv-10">
                                        <i class="la la-info-circle default"></i>
                                        <div class="group">
                                            <h6><strong>Ortopedista</strong></h6>
                                            <h6>CRM 123456 SP</h6>
                                        </div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in massa hendrerit, eleifend diam sed, egestas neque. Morbi pretium urna et tellus iaculis, id egestas mi gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                                    <br />
                                    <p>Nullam sit amet turpis accumsan, tincidunt nisi ac, bibendum odio. In lobortis vitae erat at sagittis. Integer sed mauris euismod, consequat magna ut, faucibus odio. Proin euismod libero at lorem scelerisque, in ullamcorper dolor consectetur. Nam luctus elit ac est molestie faucibus.</p>
                                    <br />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in massa hendrerit, eleifend diam sed, egestas neque. Morbi pretium urna et tellus iaculis, id egestas mi gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam sit amet turpis accumsan, tincidunt nisi ac, bibendum odio. In lobortis vitae erat at sagittis. Integer sed mauris euismod, consequat magna ut, faucibus odio. Proin euismod libero at lorem scelerisque, in ullamcorper dolor consectetur. Nam luctus elit ac est molestie faucibus.</p>
                                </div>
                                <div class="col-xs-12 col-sm-6 mt-mob-30">
                                    <h3 class="mb-20">Endereço</h3>
                                    <div class="group-flex-h mt-10 mb-20">
                                        <i class="la la-map-marker primary"></i>
                                        <div class="group">
                                            <h6>Avenida da Aclimação, 56<br />
                                                Aclimação - São Paulo<br />
                                                CEP: 01531000</h6>
                                        </div>
                                    </div>
                                    <div class="iframe-map">
                                        <div class="embed-responsive embed-responsive-16by9">
                                            <iframe class="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7310.765447688993!2d-46.691212!3d-23.626461!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3377dd689743d274!2sBig+Fish+Digital!5e0!3m2!1spt-BR!2sus!4v1548934805267" width="100%" height="100%" frameborder="0" style={{ border: 0 }} allowfullscreen></iframe>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MarcarConsulta3;
