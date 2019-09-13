import React, { Component } from 'react';
import Avatar from '../../assets/images/avatar.jpg';
import Visa from '../../assets/images/icon-visa.svg';
import Default from '../../assets/images/default.jpg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class ConsultasRealizadasPerfil extends Component {
  
  componentDidMount(){
    window.mount()  
}
    render(){return (
        <div>
        <section className="tab-header">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <Link to="/auth/consultas/realizadas" className="btn btn-clean btn-icon js-back">
                  <i className="la la-arrow-left" /><span>Voltar</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <main className="main">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 mb-20">
                <div className="header-main border-bottom">
                  <div className="flex-space no-flex-xs">
                    <div className="title">
                      <h1>Ortopedia</h1>
                      <h3>Consulta: CM45KO6R7</h3>
                      <h6>Este é o histórico de sua teleconsulta, confira abaixo.</h6>
                    </div>
                    <div className="group-btn">
                      <a href="#!" className="btn btn-clean btn-icon-small">
                        <i className="la la-print" />Imprimir
                      </a>
                      <a href="#!" data-toggle="modal" data-target="#modal-avaliar" className="btn btn-clean btn-icon-small">
                        <i className="la la-star-o" />Avaliar consulta
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-6">
                <div className="d-inline mb-20">
                  <h3>Dados do seu médico:</h3>
                  <h6>Confira as informações de seu médico abaixo.</h6>
                </div>
                <a href="#!" data-toggle="modal" data-target="#modal-informacoes" className="group-avatar">
                  <img src={Avatar} alt="Nome" />
                  <div className="group">
                    <h6><strong>Dr. Médico Josival</strong></h6>
                    <h6>Ortopedia</h6>
                    <h6>Consulta: CM45KO6R7</h6>
                  </div>
                </a>
              </div>
              <div className="col-xs-12 col-sm-8 col-md-6 mt-mob-20">
                <div className="d-inline mb-20">
                  <h3>Pagamento</h3>
                  <h6>Estas são as informações de pagamento. Se você tem convêncio, estará discriminado abaixo.</h6>
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
                      <h6>Teleconsulta<br /> realizada</h6>
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
              <div className="col-xs-12 col-mob-full"><hr /></div>
              {/* Lembretes e prescrições */}
              <div className="col-xs-12 col-sm-6 col-md-5 col-mob-full">
                <div className="d-inline mb-20 ph-mob-15">
                  <h3>Lembretes e prescrições</h3>
                  <h6>Abaixo a lista de lembretes e prescrições que o médico deixou:</h6>
                </div>
                <div className="card p-20 no-radius-mob">
                  <div className="d-inline mb-5">
                    <h6><strong>Princípio ativo ou Medicamento</strong></h6>
                    <h6 className="italic default">Consulta: CM45KO6R7</h6>
                  </div>
                  <div className="d-inline mb-10">
                    <h6>Apresentação</h6>
                    <h6 className="italic default">Apresentação 400 MG COM CT BL AL PLAS INC</h6>
                  </div>
                  <div className="d-inline mb-10">
                    <h6>Qual intervalo?</h6>
                    <h6 className="italic default">Intervalo de 4 horas</h6>
                  </div>
                  <div className="d-inline mb-10">
                    <h6>Quantos dias?</h6>
                    <h6 className="italic default">8 dias</h6>
                  </div>
                  <div className="d-inline mb-10">
                    <h6>Data e horário de início</h6>
                    <h6 className="italic default">Começa em 12/05/2019</h6>
                  </div>
                </div>
                <div className="card p-20 no-radius-mob">
                  <div className="d-inline mb-5">
                    <h6><strong>Princípio ativo ou Medicamento</strong></h6>
                    <h6 className="italic default">Consulta: CM45KO6R7</h6>
                  </div>
                  <div className="d-inline mb-10">
                    <h6>Apresentação</h6>
                    <h6 className="italic default">Apresentação 400 MG COM CT BL AL PLAS INC</h6>
                  </div>
                  <div className="d-inline mb-10">
                    <h6>Qual intervalo?</h6>
                    <h6 className="italic default">Intervalo de 4 horas</h6>
                  </div>
                  <div className="d-inline mb-10">
                    <h6>Quantos dias?</h6>
                    <h6 className="italic default">8 dias</h6>
                  </div>
                  <div className="d-inline mb-10">
                    <h6>Data e horário de início</h6>
                    <h6 className="italic default">Começa em 12/05/2019</h6>
                  </div>
                </div>
                <div className="card p-20 no-radius-mob">
                  <div className="check-custom">
                    <div className="item">
                      <input id="lembrete-1" type="checkbox" name="checkbox" />
                      <label htmlFor="lembrete-1" className="top">
                        <span className="group">
                          <h6><strong>Título do lembrete</strong></h6>
                          <h6 className="italic default">Consulta: CM45KO6R7</h6>
                          <h6 className="mv-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique venenatis ornare.</h6>
                          <h6 className="italic default mb-5">Começa em 25/02/2019</h6>
                          <h6 className="italic default">Repete Semanalmente</h6>
                          <h6 className="italic default">Termina em 01/04/2019</h6>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="card p-20 no-radius-mob">
                  <div className="check-custom">
                    <div className="item">
                      <input id="lembrete-2" type="checkbox" name="checkbox" />
                      <label htmlFor="lembrete-2" className="top">
                        <span className="group">
                          <h6><strong>Título do lembrete</strong></h6>
                          <h6 className="italic default">Consulta: CM45KO6R7</h6>
                          <h6 className="mv-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique venenatis ornare.</h6>
                          <h6 className="italic default mb-5">Começa em 25/02/2019</h6>
                          <h6 className="italic default">Repete Semanalmente</h6>
                          <h6 className="italic default">Termina em 01/04/2019</h6>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {/* Anotações */}
              <div className="col-xs-12 col-sm-6 col-md-offset-1 mt-mob-30">
                <div className="d-inline mb-20">
                  <h3>Anotações</h3>
                  <h6>Abaixo as anotações que o médico deixou:</h6>
                </div>
                <div className="d-inline mb-30">
                  <article className="p-small">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in massa hendrerit, eleifend diam sed, egestas neque. Morbi pretium urna et tellus iaculis, id egestas mi gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                    <br />
                    <p>Nullam sit amet turpis accumsan, tincidunt nisi ac, bibendum odio. In lobortis vitae erat at sagittis. Integer sed mauris euismod, consequat magna ut, faucibus odio. Proin euismod libero at lorem scelerisque, in ullamcorper dolor consectetur. Nam luctus elit ac est molestie faucibus.</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in massa hendrerit, eleifend diam sed, egestas neque. Morbi pretium urna et tellus iaculis, id egestas mi gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam sit amet turpis accumsan, tincidunt nisi ac, bibendum odio. In lobortis vitae erat at sagittis. Integer sed mauris euismod, consequat magna ut, faucibus odio. Proin euismod libero at lorem scelerisque, in ullamcorper dolor consectetur. Nam luctus elit ac est molestie faucibus.</p>
                  </article>
                </div>
                <div className="d-inline mb-20">
                  <div className="flex"><h3>Anexos</h3><h6 className="pl-5">5 arquivos</h6></div>
                  <h6>Confira os anexos desta teleconsulta:</h6>
                </div>
                <div className="d-inline mb-20 list-img">
                  <div className="row ph-small">
                    <div className="col-xs-4 col-sm-3 col-5 boxHeight">
                      <a data-fancybox="lightbox-img" data-caption="Nome do Anexo" href="../assets/img/default.jpg" className="box-lightbox-img">
                        <div className="box-img" style={{backgroundImage: 'url('+Default+')'}} />
                      </a>
                    </div>
                    <div className="col-xs-4 col-sm-3 col-5 boxHeight">
                      <a data-fancybox="lightbox-img" data-caption="Nome do Anexo" href="../assets/img/default.jpg" className="box-lightbox-img">
                        <div className="box-img" style={{backgroundImage: 'url('+Default+')'}} />
                      </a>
                    </div>
                    <div className="col-xs-4 col-sm-3 col-5 boxHeight">
                      <a data-fancybox="lightbox-img" data-caption="Nome do Anexo" href="../assets/img/default.jpg" className="box-lightbox-img">
                        <div className="box-img" style={{backgroundImage: 'url('+Default+')'}} />
                      </a>
                    </div>
                    <div className="col-xs-4 col-sm-3 col-5 boxHeight">
                      <a data-fancybox="lightbox-img" data-caption="Nome do Anexo" href="../assets/img/default.jpg" className="box-lightbox-img">
                        <div className="box-img" style={{backgroundImage: 'url('+Default+')'}} />
                      </a>
                    </div>
                    <div className="col-xs-4 col-sm-3 col-5 boxHeight">
                      <a data-fancybox="lightbox-img" data-caption="Nome do Anexo" href="../assets/img/default.jpg" className="box-lightbox-img">
                        <div className="box-img" style={{backgroundImage: 'url('+Default+')'}} />
                      </a>
                    </div>
                    <div className="col-xs-4 col-sm-3 col-5 boxHeight">
                      <a data-fancybox="lightbox-img" data-caption="Nome do Anexo" href="../assets/img/default.jpg" className="box-lightbox-img">
                        <div className="box-img" style={{backgroundImage: 'url('+Default+')'}} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main><div id="modal-avaliar" class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content js-fullheight-mob">
            <div class="modal-header">
                <div class="flex-space">
                    <div class="group-avatar">
                        <img src={Avatar} alt="Nome"/>
                        <div class="group">
                            <h3>Dr. Médico Josival</h3>
                            <h6>Ortopedia - Consulta: CM45KO6R7</h6>
                        </div>
                    </div>
                </div>
                <button type="button" class="close" data-dismiss="modal">
                    <i class="la la-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="col-xs-12">
                    <div class="box-avaliar">
                        <h1>Como foi o atendimento com Dr. Médico Josival?</h1>
                        <div class="group-avaliar">
                            <div id="js_avaliar_medico" class="star">
                                <span class="item-avaliar">
                                    <h6 class="item-valor"></h6>
                                </span>
                            </div>
                        </div>
                        <a href="javascript:" data-dismiss="modal" class="btn btn-large">Pronto</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
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
    );}
}

export default ConsultasRealizadasPerfil;
