import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Avatar from '../../assets/images/avatar.jpg';
import MedicoCardAgendar from '../../components/medico-card-agendar';
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
                            <MedicoCardAgendar nome="Dr. Médico Josival" crm="123456" estado="SP" preco="70,99" endereco1="Avenida da Aclimação, 56" endereco2="Aclimação - São Paulo"/>   
                        </div>

                        <div class="col-xs-12 col-sm-6 col-md-4">
                            <MedicoCardAgendar nome="Dr. Médico Josival" crm="123456" estado="SP" preco="170,99" endereco1="Avenida da Aclimação, 56" endereco2="Aclimação - São Paulo"/>   
                        </div>

                        <div class="col-xs-12 col-sm-6 col-md-4">
                            <MedicoCardAgendar nome="Dr. Médico Josival" crm="123456" estado="SP"  endereco1="Avenida da Aclimação, 56" endereco2="Aclimação - São Paulo"/>   
                        </div>

                        <div class="col-xs-12 col-sm-6 col-md-4">
                            <MedicoCardAgendar nome="Dr. Médico Josival" crm="123456" estado="SP"  endereco1="Avenida da Aclimação, 56" endereco2="Aclimação - São Paulo"/>   
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}

export default MarcarConsulta3;
