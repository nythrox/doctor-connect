import React, { Component } from 'react';
import Visa from '../../assets/images/icon-visa.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class AnunciosInt extends Component {

    componentDidMount(){
        window.mount()  
    }
    render() {
        return (
          <div>
            <section className="tab-header tab-small">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12">
                    <div className="flex-space">
                      <a href="javascript:" className="btn btn-clean btn-icon js-back">
                        <i className="la la-arrow-left" /><span>Voltar</span>
                      </a>
                      <div className="visible-xs">
                        <div className="flex">
                          <label className="switch">
                            <input type="checkbox" name="compartilhar" id="compartilhar" defaultChecked />
                            <span className="slider round" />
                          </label>
                          <h6 className="pl-5">Ativo</h6>
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
                  <div className="col-xs-12">
                    <div className="header-main border-bottom">
                      <div className="flex-space-top no-flex-xs">
                        <div className="title">
                          <h1>Nome do anúncio</h1>
                          <h3>Tipo do anúncio</h3>
                          <h6>Confira os resultados dse seu anúncio até agora.</h6>
                        </div>
                        <div className="flex hidden-xs">
                          <label className="switch">
                            <input type="checkbox" name="compartilhar" id="compartilhar" defaultChecked />
                            <span className="slider round" />
                          </label>
                          <h6 className="pl-5">Ativo</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-md-4">
                    <div className="card simples boxHeight">
                      <div className="title mb-20">
                        <h3>Nome do gráfico</h3>
                        <h6>Descrição do grafico com dados.</h6>
                      </div>
                      <div className="box-grafico">
                        <canvas id="bar-chart" width={800} height={450} />
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-md-4">
                    <div className="card simples boxHeight">
                      <div className="title mb-20">
                        <h3>Nome do gráfico</h3>
                        <h6>Descrição do grafico com dados.</h6>
                      </div>
                      <div className="box-grafico">
                        <canvas id="line-chart" width={800} height={450} />
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-md-4">
                    <div className="card simples boxHeight">
                      <div className="title mb-20">
                        <h3>Nome do gráfico</h3>
                        <h6>Descrição do grafico com dados.</h6>
                      </div>
                      <div className="box-grafico">
                        <canvas id="pie-chart" width={800} height={450} />
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12"><hr /></div>
                  <div className="col-xs-12 col-sm-6">
                    <div className="d-inline mb-10">
                      <h3>Segmento</h3>
                      <h6>Confira a segmentação escolhida para este anúncio.</h6>
                    </div>
                    <div className="card simples">
                      <div className="d-inline mb-20">
                        <h6><strong>Médicos</strong></h6>
                      </div>
                      <div className="list-check-btn">
                        <span className="btn">Acupunturista</span>
                        <span className="btn">Cardiologista</span>
                      </div>
                    </div>
                    <div className="box-video">
                      <video autoPlay loop poster="https://ak4.picdn.net/shutterstock/videos/1012593674/thumb/5.jpg">
                        <source src="https://ak4.picdn.net/shutterstock/videos/1012593674/preview/stock-footage-surgeon-and-female-doctor-walk-through-hospital-hallway-they-consult-digital-tablet-computer-while.webm" type="video/webm" />
                        <source src="https://ak4.picdn.net/shutterstock/videos/1012593674/preview/stock-footage-surgeon-and-female-doctor-walk-through-hospital-hallway-they-consult-digital-tablet-computer-while.mp4" type="video/mp4" />
                      </video>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6">
                    <div className="d-inline mb-20">
                      <h3>Pagamento</h3>
                      <h6>Estas são as informações de pagamento.</h6>
                    </div>
                    <div className="box-status-pagamento">
                      <div className="group-status">
                        <div className="item boxHeight ok">
                          <h6>Pedido<br /> realizado</h6>
                          <h6 className="italic default">01/08/2019</h6>
                        </div>
                        <div className="item boxHeight ok">
                          <h6>Pedido<br /> faturado</h6>
                          <h6 className="italic default">01/08/2019</h6>
                        </div>
                        <div className="item boxHeight active">
                          <h6>Pago<br /> realizado</h6>
                          <h6 className="italic default">02/08/2019</h6>
                        </div>
                        <div className="item boxHeight">
                          <h6>Anúncio<br /> aprovado</h6>
                          <h6 className="italic default">Aguardando…</h6>
                        </div>
                      </div>
                      <div className="group-cartao mt-20">
                        <h6 className="mb-5"><strong>Forma de pagamento</strong></h6>
                        <div className="flex-top">
                          <img className="icon-cartao" src={Visa} alt="Visa" />
                          <div className="group">
                            <h6>Cartão Visa</h6>
                            <h6>Nome: Fulano de Tal</h6>
                            <h6>Cartão: <span>*** *** ***</span> 9898</h6>
                          </div>
                          <div className="group">
                            <h6>2x de R$ 40,00</h6>
                            <h6><strong>Total R$ 80,00</strong></h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        );
    }
}

export default AnunciosInt;
