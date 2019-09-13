import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
class MarcarConsulta2 extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        this.props.history.push("/marcar-consulta/3");
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <section class="box-tab-top">
                    <div class="container">
                        <div class="row">
                            <div class="flex-top">
                                <div class="col-xs-12 col-sm-3 col-md-2 hidden-xs">
                                    <Link to="/marcar-consulta/1" className="btn btn-clean btn-icon js-back">
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
                                        </div>
                                        <div class="item">
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

                <main class="main p-btn-fixed">
                    <div class="container">
                        <div class="row">

                            <div class="col-xs-12 col-sm-6 col-lg-4 col-sm-offset-3 col-lg-offset-4 col-mob-full">
                                <form onSubmit={this.handleSubmit} data-toggle="validator">
                                    <div class="card-clean">
                                        <div class="top">
                                            <h1>Ortopedia em…</h1>
                                            <h6>Informe abaixo a localização para buscar um profissional na área escolhida.</h6>
                                        </div>
                                        <Link to="/marcar-consulta/3" className="list btn-next">
                                            <div class="group-list flex pv-20">
                                                <i class="la la-map-marker"></i>
                                                <div class="title">
                                                    <h6><strong>Quero usar minha localização atual</strong></h6>
                                                    <h6>Bairro Novo Brooklin - São Paulo / SP</h6>
                                                </div>
                                            </div>
                                        </Link>

                                        <div class="box-form-fade">
                                            <h6 class="mb-20">Ou digite abaixo a área que deseja que o Conecta Médico busque um profissional.</h6>
                                            <div class="form-group has-feedback">
                                                <select name="estado" id="estado" class="form-control">
                                                    <option selected hidden value="">Estado</option>
                                                    <option value="AC">Acre</option>
                                                    <option value="AL">Alagoas</option>
                                                    <option value="AP">Amapá</option>
                                                    <option value="AM">Amazonas</option>
                                                    <option value="BA">Bahia</option>
                                                    <option value="CE">Ceará</option>
                                                    <option value="DF">Distrito Federal</option>
                                                    <option value="ES">Espírito Santo</option>
                                                    <option value="GO">Goiás</option>
                                                    <option value="MA">Maranhão</option>
                                                    <option value="MT">Mato Grosso</option>
                                                    <option value="MS">Mato Grosso do Sul</option>
                                                    <option value="MG">Minas Gerais</option>
                                                    <option value="PA">Pará</option>
                                                    <option value="PB">Paraíba</option>
                                                    <option value="PR">Paraná</option>
                                                    <option value="PE">Pernambuco</option>
                                                    <option value="PI">Piauí</option>
                                                    <option value="RJ">Rio de Janeiro</option>
                                                    <option value="RN">Rio Grande do Norte</option>
                                                    <option value="RS">Rio Grande do Sul</option>
                                                    <option value="RO">Rondônia</option>
                                                    <option value="RR">Roraima</option>
                                                    <option value="SC">Santa Catarina</option>
                                                    <option value="SP">São Paulo</option>
                                                    <option value="SE">Sergipe</option>
                                                    <option value="TO">Tocantins</option>
                                                </select>
                                            </div>
                                            <div class="form-group has-feedback">
                                                <input type="text" name="cidade" id="cidade" class="form-control" placeholder="Cidade" />
                                            </div>
                                            <div class="form-group has-feedback">
                                                <input type="texte" name="bairro" id="bairro" class="form-control" placeholder="Bairro" />
                                            </div>
                                        </div>

                                        <div class="group-btn-fixed border-top">
                                            <button class="btn btn-full">Buscar</button>
                                        </div>

                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default MarcarConsulta2;
