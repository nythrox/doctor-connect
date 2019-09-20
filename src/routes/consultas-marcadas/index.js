import React, { Component } from "react";
import $ from "jquery";
import Avatar from "../../assets/images/avatar.jpg";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MedicoCardSolicitacaoConsulta from "../../components/medico-card-solicitacao-consulta";
import MedicoCardConsultaEntrar from "../../components/medico-card-consulta-entrar";
import Cookies from "universal-cookie";

class ConsultasMarcadas extends Component {
  constructor() {
    super();
    this.state = {
      solicitacaoConsultas: []
    };
  }

  componentDidMount() {
    this.fetchApi();
    window.mount();
  }

  async fetchApi() {
    const cookies = new Cookies();
    const access_token = cookies.get("access_token");
    let url =
      "http://www.programandocomphp.com.br/conectamedico/public/api/auth/get-schedules";
    let response;
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + access_token
      }
    }).then(res => res.json().then(res => (response = res)));
    if (response["success"]) {
      this.setState({ solicitacaoConsultas: response["schedules"] });
      console.log(this.state);
    }
  }

  render() {
    return (
      <div>
        <section class="tab-header pb-tab">
          <div class="container">
            <div class="row">
              <div class="col-xs-12">
                <div class="flex-space mb-10">
                  <h1>Consultas</h1>
                  <Link
                    to="/auth/consultas/marcar-pagamento"
                    className="btn btn-line"
                  >
                    Marcar consulta
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="tab-line mod-2">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 pr-mob-0">
                <ul class="nav nav-tab tab-scroll-mob">
                  <li class="active">
                    <Link to="./marcadas">Marcadas</Link>
                  </li>
                  <li>
                    <Link to="./realizadas">Realizadas</Link>
                  </li>
                </ul>
              </div>
              <div class="col-xs-12 mt-30">
                <div class="header-main border-bottom">
                  <div class="title">
                    <h3>Solicitações de Consultas</h3>
                    <h6>
                      Abaixo as solicitações de consulta marcadas pelo médico.
                      Basta aceitar para que possa realizar sua teleconsulta.
                    </h6>
                  </div>
                </div>

                <div class="row">
                  <div class="col-xs-12 col-sm-6 col-md-4">
                    <MedicoCardSolicitacaoConsulta
                      nome="Dr. Médico Josival"
                      crm="123456"
                      estado="SP"
                      tituloConsulta="Ortopedia"
                      codConsulta="CM45KO6R7"
                    />
                  </div>
                  <div class="col-xs-12 col-sm-6 col-md-4">
                    <MedicoCardSolicitacaoConsulta
                      nome="Dr. Médico Josival"
                      crm="123456"
                      estado="SP"
                      tituloConsulta="Ortopedia"
                      codConsulta="CM45KO6R7"
                    />
                  </div>
                  <div class="col-xs-12 col-sm-6 col-md-4">
                    <MedicoCardSolicitacaoConsulta
                      nome="Dr. Médico Josival"
                      crm="123456"
                      estado="SP"
                      tituloConsulta="Ortopedia"
                      codConsulta="CM45KO6R7"
                    />
                  </div> 
                </div>

                <div class="header-main border-bottom mt-50">
                  <div class="flex-space no-flex-xs">
                    <div class="title">
                      <h3>Suas Consultas</h3>
                      <h6>
                        Confira abaixo a lista de consultas marcadas para você.
                      </h6>
                    </div>
                    <div class="box-search">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Buscar por voucher ou médico"
                      />
                      <i class="la la-search"></i>
                    </div>
                  </div>
                </div>

                <div class="row">
                  {this.state.solicitacaoConsultas.map(i => {
                    return (
                      <div class="col-xs-12 col-sm-6 col-md-4">
                        <MedicoCardConsultaEntrar
                          id_medico={i.doctor_id}
                          codConsulta={i.voucher}
                          data={i.schedule_date}
                        />
                      </div>
                    );
                  })}
                  {/* <div class="col-xs-12 col-sm-6 col-md-4">
                      
                    <MedicoCardConsultaEntrar
                      tipo="1"
                      nome="Dr. Médico Josival"
                      crm="123456"
                      estado="SP"
                      tituloConsulta="Ortopedia"
                      codConsulta="CM45KO6R7"
                    />
                  </div>
                  <div class="col-xs-12 col-sm-6 col-md-4">
                    <MedicoCardConsultaEntrar
                      tipo="2"
                      nome="Dr. Médico Josival"
                      crm="123456"
                      estado="SP"
                      tituloConsulta="Ortopedia"
                      codConsulta="CM45KO6R7"
                    />
                  </div>
                  <div class="col-xs-12 col-sm-6 col-md-4">
                    <MedicoCardConsultaEntrar
                      tipo="2"
                      nome="Dr. Médico Josival"
                      crm="123456"
                      estado="SP"
                      tituloConsulta="Ortopedia"
                      codConsulta="CM45KO6R7"
                    />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ConsultasMarcadas;
