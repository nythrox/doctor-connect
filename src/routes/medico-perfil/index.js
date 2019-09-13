import React from 'react';
import Avatar from '../../assets/images/avatar.jpg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function MedicoPerfil() {
    return (
        <div>
            <section class="tab-header">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="flex-space">

                                <Link to="/auth/meus-medicos" className="btn btn-clean btn-icon js-back">
                                    <i class="la la-arrow-left"></i><span>Voltar</span></Link>
                                    <Link to="/auth/consultas/marcar-pagamento" class="btn btn-line">Marcar consulta</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <main class="main">
                <div class="container">
                    <div class="row">

                        <div class="col-xs-12 mb-30">
                            <div class="group-avatar big">
                                <img src={Avatar} alt="Nome" />
                                <div class="group">
                                    <h1>Dr. Médico Josival</h1>
                                    <div class="group-avaliar box-right">
                                        <i class="la la-star"></i>
                                        <h6>3,0</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xs-12 col-sm-4 col-md-3">
                            <div class="d-inline mb-30">
                                <h3>Informações</h3>
                                <h6>Confira as informações básicas deste médico.</h6>
                            </div>
                            <div class="group-flex-h mb-10">
                                <i class="la la-info-circle default"></i>
                                <div class="group">
                                    <h6><strong>Ortopedista</strong></h6>
                                    <h6>CRM 123456 SP</h6>
                                </div>
                            </div>
                            <div class="group-flex-h mb-10">
                                <i class="la la-map-marker primary"></i>
                                <div class="group">
                                    <h6>Avenida da Aclimação, 56<br />
                                        Aclimação - São Paulo<br />
                                        CEP: 01531000</h6>
                                </div>
                            </div>
                            <div class="d-inline mv-10">
                                <div class="flex">
                                    <label class="switch">
                                        <input type="checkbox" name="compartilhar" id="compartilhar" checked />
                                        <span class="slider round"></span>
                                    </label>
                                    <h6 class="pl-5">Compartilhar consultas</h6>
                                </div>
                                <h6 class="italic default mt-5">Ativando você irá compartilhar consultas de outros médicos com este.</h6>
                            </div>
                        </div>

                        <div class="col-xs-12 col-sm-8 col-md-9 mt-mob-20">
                            <div class="d-inline mb-20">
                                <h3>Sobre o médico</h3>
                                <h6>Leia sobre este médico.</h6>
                            </div>
                            <div class="d-inline mb-30">
                                <article class="p-small">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in massa hendrerit, eleifend diam sed, egestas neque. Morbi pretium urna et tellus iaculis, id egestas mi gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                                    <br />
                                    <p>Nullam sit amet turpis accumsan, tincidunt nisi ac, bibendum odio. In lobortis vitae erat at sagittis. Integer sed mauris euismod, consequat magna ut, faucibus odio. Proin euismod libero at lorem scelerisque, in ullamcorper dolor consectetur. Nam luctus elit ac est molestie faucibus.</p>
                                    <br />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in massa hendrerit, eleifend diam sed, egestas neque. Morbi pretium urna et tellus iaculis, id egestas mi gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam sit amet turpis accumsan, tincidunt nisi ac, bibendum odio. In lobortis vitae erat at sagittis. Integer sed mauris euismod, consequat magna ut, faucibus odio. Proin euismod libero at lorem scelerisque, in ullamcorper dolor consectetur. Nam luctus elit ac est molestie faucibus.</p>
                                </article>
                            </div>
                        </div>

                        <div class="col-xs-12 col-mob-full"><hr /></div>

                        <div class="col-xs-12">
                            <div class="header-main">
                                <div class="title">
                                    <h3>Consultas já realizadas</h3>
                                    <h6>Estas são as consultas que foram realizadas com este médico.</h6>
                                </div>
                            </div>
                            <div class="group-list-link">
                                <a href="consultas-realizadas-int.php" class="item">
                                    <div class="flex-space">
                                        <h6><strong>Consulta: CM45KO6R7</strong></h6>
                                        <h6 class="italic default">20 de julho de 2019</h6>
                                    </div>
                                </a>
                                <a href="consultas-realizadas-int.php" class="item">
                                    <div class="flex-space">
                                        <h6><strong>Consulta: CM45KO6R7</strong></h6>
                                        <h6 class="italic default">20 de julho de 2019</h6>
                                    </div>
                                </a>
                                <a href="consultas-realizadas-int.php" class="item">
                                    <div class="flex-space">
                                        <h6><strong>Consulta: CM45KO6R7</strong></h6>
                                        <h6 class="italic default">20 de julho de 2019</h6>
                                    </div>
                                </a>
                                <a href="consultas-realizadas-int.php" class="item">
                                    <div class="flex-space">
                                        <h6><strong>Consulta: CM45KO6R7</strong></h6>
                                        <h6 class="italic default">20 de julho de 2019</h6>
                                    </div>
                                </a>
                                <a href="consultas-realizadas-int.php" class="item">
                                    <div class="flex-space">
                                        <h6><strong>Consulta: CM45KO6R7</strong></h6>
                                        <h6 class="italic default">20 de julho de 2019</h6>
                                    </div>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}

export default MedicoPerfil;
