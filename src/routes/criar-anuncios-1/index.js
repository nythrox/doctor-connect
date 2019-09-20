import React, {Component} from 'react';
import Default from '../../assets/images/default.jpg';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
class CriarAnuncio1 extends Component {
    
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
                          <div className="item">
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
                    <div className="col-xs-12 col-sm-6 hidden-xs">
                      <h2 className="mb-20">Realize o pagamento para seu anúncio veicular no Conecta Médico.</h2>
                      <h3 className="mb-20">Seu anúncio está quase pronto pra ser vinculado. Realize o pagamento e aguarde aprovação.</h3>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-lg-4 col-lg-offset-1 col-mob-full">
                      <form action="criar-anuncio-2.php" data-toggle="validator">
                        <div className="card-clean">
                          <div className="top">
                            <h1>Configure seu anúncio</h1>
                            <h6>Para seu anúncio veicular no Conecta Médico, é preciso configurar e escolher a forma como ele irá aparecer:</h6>
                          </div>
                          <div className="list no-border">
                            <div className="group-list">
                              <div className="d-inline mb-10">
                                <h4>Nome do anúncio</h4>
                                <h6>Escolha um nome para identificar na lista de anúncios.</h6>
                              </div>
                              <div className="form-group has-feedback">
                                <input type="text" name="nome_anuncio" id="nome_anuncio" className="form-control" placeholder="Nome" />
                              </div>
                            </div>
                          </div>
                          <div className="list no-border">
                            <div className="group-list">
                              <div className="d-inline mb-10">
                                <h4>Quantidade de visualizações</h4>
                                <h6>Escolha  quantas vezes o seu anúncio deverá ser exibido para os usuários.</h6>
                              </div>
                              <div className="form-group has-feedback">
                                <input type="tel" name="quantidade" id="quantidade" className="form-control" placeholder="Quantidade" />
                              </div>
                            </div>
                          </div>
                          <div className="list no-border">
                            <div className="group-list">
                              <div className="d-inline mb-10">
                                <h4>Tipo do anúncio</h4>
                                <h6>Escolha o tipo do anúncio que deseja ser veiculado.</h6>
                              </div>
                              <div className="check-custom">
                                <div className="item">
                                  <input id="video_10seg" type="radio" name="radio" />
                                  <label htmlFor="video_10seg" className="small">
                                    <span className="group">
                                      <h6><strong>Vídeo 10seg </strong></h6>
                                      <h6>R$ 70,99 por visualização</h6>
                                    </span>
                                  </label>
                                </div>
                                <div className="item">
                                  <input id="video_30seg" type="radio" name="radio" />
                                  <label htmlFor="video_30seg" className="small">
                                    <span className="group">
                                      <h6><strong>Vídeo 30seg </strong></h6>
                                      <h6>R$ 70,99 por visualização</h6>
                                    </span>
                                  </label>
                                </div>
                                <div className="item">
                                  <input id="video_60seg" type="radio" name="radio" />
                                  <label htmlFor="video_60seg" className="small">
                                    <span className="group">
                                      <h6><strong>Vídeo 60seg </strong></h6>
                                      <h6>R$ 70,99 por visualização</h6>
                                    </span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="list no-border">
                            <div className="group-list">
                              <div className="d-inline mv-20">
                                <h4>Total do pedido</h4>
                                <h6>Abaixo mostramos o total do seu pedido.</h6>
                                <h4 className="mt-10"><strong>R$ 32.837,87</strong></h4>
                              </div>
                            </div>
                          </div>
                          <div className="list no-border">
                            <div className="group-list">
                              <div className="d-inline mb-10">
                                <h4>Arquivo do anúncio</h4>
                                <h6>Após a confirmação do pagamento, será possível incluir o arquivo do anúncio.</h6>
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

export default CriarAnuncio1;
