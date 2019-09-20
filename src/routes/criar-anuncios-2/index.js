import React, {Component} from 'react';
import Default from '../../assets/images/default.jpg';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
class CriarAnuncio2 extends Component {
    
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
      window.mount();    
}

  handleSubmit(event) {
    this.props.history.push("/marcar-consulta/3");
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
                    <h2 className="mb-20">Escolha a segmentação de seu anúncio.</h2>
                    <h3 className="mb-20">Escolha quem será impactado por seu anúncio.</h3>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-lg-4 col-lg-offset-1 col-mob-full">
                    <form action="criar-anuncio-3.php" data-toggle="validator">
                      <div className="card-clean">
                        <div className="top">
                          <h1>Faça a segmentação</h1>
                          <h6>Escolha quem irá ver seu anúncio com base nos usuários do Conecta Médico.</h6>
                        </div>
                        <div className="list no-border">
                          <div className="group-list">
                            <div className="d-inline mb-20">
                              <h4>Escolha o público</h4>
                              <h6>Identifique as pessoas que irão ser impactadas pelo anúncio.</h6>
                            </div>
                          </div>
                        </div>
                        <div className="list">
                          <div className="group-list flex">
                            <div className="has-feedback">
                              <div className="check-custom">
                                <div className="item">
                                  <input id="medicos" type="checkbox" name="checkbox" />
                                  <label htmlFor="medicos">
                                    <span className="group">
                                      <h6><strong>Médicos</strong></h6>
                                      <h6>Escolha os profissionais</h6>
                                    </span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Sanfona */}
                          <div className="box-form-fade js-form-medico" style={{display: 'none'}}>
                            <h6>Especialidade:</h6>
                            <div className="list-check-btn">
                              <span className="button-checkbox">
                                <button type="button" className="btn btn-line js-check-todos">Todos</button>
                                <input type="checkbox" />
                              </span>
                              <span className="button-checkbox">
                                <button type="button" className="btn btn-line">Acupunturista</button>
                                <input type="checkbox" />
                              </span>
                              <span className="button-checkbox">
                                <button type="button" className="btn btn-line">Cardiologista</button>
                                <input type="checkbox" />
                              </span>
                              <span className="button-checkbox">
                                <button type="button" className="btn btn-line">Cirurgia Geral</button>
                                <input type="checkbox" />
                              </span>
                              <span className="button-checkbox">
                                <button type="button" className="btn btn-line">Cirurgia Plástica</button>
                                <input type="checkbox" />
                              </span>
                              <span className="button-checkbox">
                                <button type="button" className="btn btn-line">Cirurgia Vascular</button>
                                <input type="checkbox" />
                              </span>
                              <span className="button-checkbox">
                                <button type="button" className="btn btn-line">Cardiologista</button>
                                <input type="checkbox" />
                              </span>
                              <span className="button-checkbox">
                                <button type="button" className="btn btn-line">Nome curto</button>
                                <input type="checkbox" />
                              </span>
                              <span className="button-checkbox">
                                <button type="button" className="btn btn-line">Nome da especialidade grande</button>
                                <input type="checkbox" />
                              </span>
                            </div>
                            <h6 className="mt-20">Sexo:</h6>
                            <div className="list-check-btn">
                              <span className="button-checkbox">
                                <button type="button" className="btn btn-line">Masculino</button>
                                <input type="checkbox" />
                              </span>
                              <span className="button-checkbox">
                                <button type="button" className="btn btn-line">Feminino</button>
                                <input type="checkbox" />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="list">
                          <div className="group-list flex">
                            <div className="has-feedback">
                              <div className="check-custom">
                                <div className="item">
                                  <input id="pacientes" type="checkbox" name="checkbox" />
                                  <label htmlFor="pacientes">
                                    <span className="group">
                                      <h6><strong>Pacientes</strong></h6>
                                      <h6>Todos os pacientes serão impactados.</h6>
                                    </span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Sanfona */}
                          <div className="box-form-fade js-form-paciente" style={{display: 'none'}}>
                            <h6>Sexo:</h6>
                            <div className="list-check-btn">
                              <span className="button-checkbox">
                                <button type="button" className="btn btn-line">Masculino</button>
                                <input type="checkbox" />
                              </span>
                              <span className="button-checkbox">
                                <button type="button" className="btn btn-line">Feminino</button>
                                <input type="checkbox" />
                              </span>
                            </div>
                            <h6 className="mt-20">Idade:</h6>
                            <div className="box-range">
                              <span id="range_idade_start" className="valor start">15</span>
                              <input id="range_idade" type="text" className="span2" data-slider-tooltip="hide" data-slider-min={1} data-slider-max={100} data-slider-step={1} data-slider-value="[15,80]" />
                              <span id="range_idade_end" className="valor end">80</span>
                            </div>
                            <h6 className="mt-30">Localização:</h6>
                            <div className="form-group">
                              <input type="text" data-role="tagsinput" defaultValue="Cidade São Paulo" placeholder="Adicionar" className="form-control" />
                            </div>
                          </div>
                        </div>
                        <div className="group-btn-inline">
                          <button className="btn btn-large">Próximo</button>
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

export default CriarAnuncio2;
