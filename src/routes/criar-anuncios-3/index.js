import React, {Component} from 'react';
import Default from '../../assets/images/default.jpg';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Visa from '../../assets/images/icon-visa.svg';
import CVV from '../../assets/images/icon-cvv.svg';
class CriarAnuncio3 extends Component {
    
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
      window.mount();    
}

  handleSubmit(event) {
    this.props.history.push("/marcar-consulta/2");
    event.preventDefault();
  }
    
    render(){
        return (
          <div>
            <section className="box-tab-top">
              <div className="container">
                <div className="row">
                  <div className="flex-top">
                    <div className="col-xs-12 col-sm-3 col-md-2 hidden-xs">
                      <a href="javascript:" className="btn btn-clean btn-icon js-back">
                        <i className="la la-arrow-left" /><span>Voltar</span>
                      </a>
                    </div>
                    <div className="col-xs-12 col-sm-9 col-md-10">
                      <div className="group-tabs">
                        <div className="item active">
                          <h6>Identificação</h6>
                          <h6 className="active">Nome do Anúncio</h6>
                        </div>
                        <div className="item active">
                          <h6>Segmentação</h6>
                          <h6 className="active">Médicos; Pacientes</h6>
                        </div>
                        <div className="item">
                          <h6>Pagamento</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <main className="main">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <h2 className="mb-20">Realize o pagamento para seu anúncio veicular no Conecta Médico.</h2>
                    <h3 className="mb-20">Seu anúncio está quase pronto pra ser veiculado. Realize o pagamento e aguarde aprovação.</h3>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-lg-4 col-lg-offset-1 col-mob-full">
                    <form action="criar-anuncio-confirmacao.php" data-toggle="validator">
                      <div className="card-clean">
                        <div className="top">
                          <h1>Escolha forma de pagamento</h1>
                          <h6>Finalize o pagamento para seu anúncio veiculado no Conecta Médico.</h6>
                        </div>
                        <div className="list">
                          <div className="group-list flex">
                            <div className="has-feedback">
                              <div className="check-custom">
                                <div className="item">
                                  <input id="cartao_credito" type="radio" name="radio" required />
                                  <label htmlFor="cartao_credito">
                                    <span className="group">
                                      <h6><strong>Cartão de Crédito</strong></h6>
                                      <h6>R$ 70,99 a consulta</h6>
                                    </span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Sanfona */}
                          <div className="box-form-fade js-form-list" style={{display: 'none'}}>
                            <div className="form-group has-feedback">
                              <input type="tel" name="numero_cartao_credito" id="numero_cartao_credito" className="form-control js-cartao-numero" placeholder="Número do cartão de crédito" />
                              <img className="icon-cartao" src={Visa} alt="Visa" />
                            </div>
                            <div className="form-group has-feedback">
                              <select name="parcelas" id="parcelas" className="form-control">
                                <option selected hidden value>Parcelas</option>
                                <option value={1}>Item 01</option>
                                <option value={2}>Item 02</option>
                              </select>
                            </div>
                            <div className="form-group has-feedback">
                              <input type="text" name="nome_cartao" id="nome_cartao" className="form-control" placeholder="Nome do portador do cartão" />
                            </div>
                            <div className="flex no-flex-xs">
                              <div className="form-group has-feedback">
                                <input type="tel" name="mes" id="mes" className="form-control js-cartao-mes" placeholder="Mês" />
                              </div>
                              <div className="form-group has-feedback">
                                <input type="tel" name="ano" id="ano" className="form-control js-cartao-ano" placeholder="Ano" />
                              </div>
                            </div>
                            <div className="form-group has-feedback">
                              <div className="flex">
                                <input type="tel" name="numero_verificacao" id="numero_verificacao" className="form-control js-cartao-cvv" placeholder="Número de verificação (CVV)" />
                                <img className="icon-big" src="../assets/img/icon-cvv.svg" alt="CVV" />
                              </div>
                            </div>
                            <div className="group-btn">
                              <button type="submit" className="btn btn-full js-finalizar">Finalizar compra</button>
                            </div>
                          </div>
                        </div>
                        <div className="list">
                          <div className="group-list flex">
                            <div className="has-feedback">
                              <div className="check-custom">
                                <div className="item">
                                  <input id="boleto_bancario" type="radio" name="radio" />
                                  <label htmlFor="boleto_bancario">
                                    <span className="group">
                                      <h6><strong>Boleto Bancário</strong></h6>
                                      <h6>R$ 70,99 a consulta</h6>
                                    </span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Sanfona */}
                          <div className="box-form-fade js-btn-boleto" style={{display: 'none'}}>
                            <div className="group-btn">
                              <a href="criar-anuncio-confirmacao.php" className="btn btn-full">Gerar boleto</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </main>
          </div>
    );}
}

export default CriarAnuncio3;
