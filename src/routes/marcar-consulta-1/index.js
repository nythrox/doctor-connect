import React, {Component} from 'react';
import Default from '../../assets/images/default.jpg';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
class MarcarConsulta1 extends Component {
    
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
        <section class="box-tab-top">
            <div class="container">
                <div class="row">
                    <div class="flex-top">
                        <div class="col-xs-12 col-sm-3 col-md-2 hidden-xs">
                            <Link to="/" className="btn btn-clean btn-icon js-back">
                                <i class="la la-arrow-left"></i><span>Voltar</span>
                            </Link>
                        </div>
                        <div class="col-xs-12 col-sm-9 col-md-10">
                            <div class="group-tabs">
                                <div class="item active">
                                    <h6>Plano de Saúde</h6>
                                </div>
                                <div class="item">
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
                                    <h1>Você tem um Plano de Saúde?</h1>
                                    <h6>Informe abaixo se possiu um plano de saúde ou se será um atendimento particular.</h6>
                                </div>
                                <div class="list">
                                    <div class="group-list flex">
                                        <div class="has-feedback">
                                            <div class="check-custom">
                                                <div class="item">
                                                    <input id="atendimento_particular" type="radio" name="radio" required/>
                                                    <label for="atendimento_particular">
                                                        <span class="group">
                                                            <h6><strong>Não, quero atendimento particular.</strong></h6>
                                                            <h6>Esta opção contém forma de pagamento.</h6>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
    
                                <div class="list">
                                    <div class="group-list flex">
                                        <div class="has-feedback">
                                            <div class="check-custom">
                                                <div class="item">
                                                    <input id="atendimento_saude" type="radio" name="radio"/>
                                                    <label for="atendimento_saude">
                                                        <span class="group">
                                                            <h6><strong>Sim, desejo atendimento pelo plano de saúde.</strong></h6>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="box-form-fade js-form-list" style={{display:'none'}}>
                                        <a href="#!" class="group-flex-space js-excluir-item">
                                            <div class="group-img">
                                                <img class="img-responsive" src={Default} alt="Nome"/>
                                                <h6>Amil</h6>
                                            </div>
                                            <span class="btn-link small">Excluir <i class="fa fa-times"></i></span>
                                        </a>
                                        <div class="group-btn">
                                            <a href="javascript:" class="btn btn-clean btn-full js-add">Adicionar mais convênio a lista</a>
                                        </div>
                                    </div>

                                    <div class="box-form-fade js-form-check" style={{display:'none'}}>
                                        <h6 class="mb-20">Digite abaixo as informações de seu convênio. Busque em sua carteirinha os dados.</h6>
                                        <div class="form-group has-feedback">
                                            <select name="convenio" id="convenio" class="form-control">
                                                <option selected hidden value="">Convênio</option>
                                                <option value="01">Item 01</option>
                                                <option value="02">Item 02</option>
                                            </select>
                                        </div>
                                        <div class="form-group has-feedback">
                                            <select name="rede_atendimento" id="rede_atendimento" class="form-control">
                                                <option selected hidden value="">Rede de atendimento</option>
                                                <option value="01">Item 01</option>
                                                <option value="02">Item 02</option>
                                            </select>
                                        </div>
                                        <div class="form-group has-feedback">
                                            <input type="tel" name="numero_carteirinha" id="numero_carteirinha" class="form-control" placeholder="Número da carteirinha"/>
                                        </div>
                                        <div class="form-group has-feedback">
                                            <input type="tel" name="data_nascimento" id="data_nascimento" class="form-control js-data" placeholder="Data de Nascimento"/>
                                        </div>
                                        <div class="group-btn">
                                            <a href="javascript:" class="btn btn-clean btn-full js-excluir">Excluir</a>
                                            <button type="button" class="btn btn-line btn-full js-salvar">Salvar</button>
                                        </div>
                                    </div>
    
                                </div>
                            </div>
                            <div class="group-btn-fixed">
                                <button type="submit" class="btn btn-full">Próximo</button>
                            </div>
                        </form>
                    </div>
    
                </div>
            </div>
        </main>
        </div>
    );}
}

export default MarcarConsulta1;
