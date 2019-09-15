import React, { Component } from 'react';
import IconCCV from '../../assets/images/icon-cvv.svg';
import IconVisa from '../../assets/images/icon-visa.svg';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
class MarcarConsulta4 extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        window.mount();
    }

    handleSubmit(event) {
        this.props.history.push("/auth/marcar-consulta-4-confirmacao");
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
                                    <Link to="/marcar-consulta/3" className="btn btn-clean btn-icon js-back">
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
                                            <h6 class="active">Dr Médico Josival</h6>
                                        </div>
                                        <div class="item active">
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

                            <div class="col-xs-12 col-sm-6 col-lg-4 col-sm-offset-3 col-lg-offset-4 col-mob-full">
                                <form onSubmit={this.handleSubmit} data-toggle="validator">
                                    <div class="card-clean">
                                        <div class="top">
                                            <h1>Escolha forma de pagamento</h1>
                                            <h6>Finalize o pagamento para fazer sua teleconsulta.</h6>
                                        </div>
                                        <div class="list">
                                            <div class="group-list flex">
                                                <div class="has-feedback">
                                                    <div class="check-custom">
                                                        <div class="item">
                                                            <input id="cartao_credito" type="radio" name="radio" required />
                                                            <label for="cartao_credito">
                                                                <span class="group">
                                                                    <h6><strong>Cartão de Crédito</strong></h6>
                                                                    <h6>R$ 70,99 a consulta</h6>
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="box-form-fade js-form-list" style={{ display: 'none' }}>
                                                <div class="form-group has-feedback">
                                                    <input type="tel" name="numero_cartao_credito" id="numero_cartao_credito" class="form-control js-cartao-numero" placeholder="Número do cartão de crédito" />
                                                    <img class="icon-cartao" src={IconVisa} alt="Visa" />
                                                </div>
                                                <div class="form-group has-feedback">
                                                    <select name="parcelas" id="parcelas" class="form-control">
                                                        <option selected hidden value="">Parcelas</option>
                                                        <option value="01">Item 01</option>
                                                        <option value="02">Item 02</option>
                                                    </select>
                                                </div>
                                                <div class="form-group has-feedback">
                                                    <input type="text" name="nome_cartao" id="nome_cartao" class="form-control" placeholder="Nome do portador do cartão" />
                                                </div>
                                                <div class="flex no-flex-xs">
                                                    <div class="form-group has-feedback">
                                                        <input type="tel" name="mes" id="mes" class="form-control js-cartao-mes" placeholder="Mês" />
                                                    </div>
                                                    <div class="form-group has-feedback">
                                                        <input type="tel" name="ano" id="ano" class="form-control js-cartao-ano" placeholder="Ano" />
                                                    </div>
                                                </div>
                                                <div class="form-group has-feedback">
                                                    <div class="flex">
                                                        <input type="tel" name="numero_verificacao" id="numero_verificacao" class="form-control js-cartao-cvv" placeholder="Número de verificação (CVV)" />
                                                        <img class="icon-big" src={IconCCV} alt="CVV" />
                                                    </div>
                                                </div>
                                                <div class="group-btn">
                                                    <button type="submit" class="btn btn-full js-finalizar">Finalizar compra</button>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="list">
                                            <div class="group-list flex">
                                                <div class="has-feedback">
                                                    <div class="check-custom">
                                                        <div class="item">
                                                            <input id="boleto_bancario" type="radio" name="radio" />
                                                            <label for="boleto_bancario">
                                                                <span class="group">
                                                                    <h6><strong>Boleto Bancário</strong></h6>
                                                                    <h6>R$ 70,99 a consulta</h6>
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="box-form-fade js-btn-boleto" style={{ display: 'none' }}>
                                                <div class="group-btn">
                                                    <Link to="/auth/marcar-consulta-4-confirmacao" className="btn btn-full">Gerar boleto
                                                     </Link>
                                                    </div>
                                            </div>
                                        </div>

                                    </div>

                                </form>
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
                                        <img src={"../assets/img/avatar.jpg"} alt="Nome" />
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
}

export default MarcarConsulta4;
