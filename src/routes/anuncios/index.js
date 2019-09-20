import React, { Component } from 'react';
import DefaultImage from '../../assets/images/default.jpg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Anuncios extends Component {

    render() {
        return (<div>
            <section className="tab-header pb-tab">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12">
                    <div className="flex-space mb-10">
                      <h1>Anúncios</h1>
                      <Link to="/auth-anuncio/anuncios-int/" className="btn">Adicionar anúncio</Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="tab-line mod-2">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12 pr-mob-0">
                    <ul className="nav nav-tab tab-scroll-mob">
                      <li className="active"><a href="#nav-1" data-toggle="tab">Todos</a></li>
                    </ul>
                  </div>
                  <div className="col-xs-12">
                    <div className="tab-content">
                      {/* Todos */}
                      <div className="tab-pane active" id="nav-1">
                        <div className="header-main">
                          <div className="flex-space no-flex-xs">
                            <div className="title">
                              <h6>Esta é a lista de anúncios cadastrados para veicular no Conecta Médico.</h6>
                            </div>
                            <div className="box-search">
                              <input type="text" className="form-control" placeholder="Buscar anúncio" />
                              <i className="la la-search" />
                            </div>
                          </div>
                        </div>
                        <table className="table table-custom">
                          <thead>
                            <tr>
                              <th className="col-xs-3">Nome</th>
                              <th className="col-xs-3">Status</th>
                              <th className="col-xs-2">Tipos</th>
                              <th className="col-xs-2">Impressão</th>
                              <th className="col-xs-2">Criado em</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr >
                            <Link to="/auth-anuncio/anuncios-int/">
                              <td>
                                <div className="group-flex">
                                  <div className="box-img" style={{backgroundImage: "url(" + DefaultImage + ")"}} />
                                  <h6><strong>Nome do anúncio</strong></h6>
                                </div>
                              </td></Link>
                              <td>
                                <div className="box-status">
                                  <h6><span className="badge bg-success" />Ativo</h6>
                                </div>
                              </td>
                              <td data-th="Tipos"><h6>30sec</h6></td>
                              <td data-th="Impressão"><h6>153</h6></td>
                              <td data-th="Criado em"><h6 className="italic default">20 de julho de 2019</h6></td>
                              </tr>
                            <tr >
                            <Link to="/auth-anuncio/anuncios-int/">
                              <td>
                                <div className="group-flex">
                                  <div className="box-img" style={{backgroundImage: "url(" + DefaultImage + ")"}} />
                                  <h6><strong>Nome do anúncio</strong></h6>
                                </div>
                              </td></Link>
                              <td>  
                                <div className="box-status">
                                  <h6><span className="badge bg-danger" />Inativo</h6>
                                </div>
                              </td>
                              <td data-th="Tipos"><h6>30sec</h6></td>
                              <td data-th="Impressão"><h6>153</h6></td>
                              <td data-th="Criado em"><h6 className="italic default">20 de julho de 2019</h6></td>
                            </tr>
                            <tr >
                            <Link to="/auth-anuncio/anuncios-int/">
                              <td>
                                <div className="group-flex">
                                  <div className="box-img" style={{backgroundImage: "url(" + DefaultImage + ")"}} />
                                  <h6><strong>Nome do anúncio com um texto muito grande</strong></h6>
                                </div>
                              </td></Link>
                              <td>
                                <div className="box-status">
                                  <h6><span className="badge bg-warning" />Aguardando</h6>
                                </div>
                              </td>
                              <td data-th="Tipos"><h6>30sec</h6></td>
                              <td data-th="Impressão"><h6>153</h6></td>
                              <td data-th="Criado em"><h6 className="italic default">20 de julho de 2019</h6></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>{/* /tab-content */}
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
    }
}

export default Anuncios;
