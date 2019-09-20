import React, { Component } from "react";
import Avatar from "../../assets/images/avatar.jpg";
import MedicoModal from "../medico-modal";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Cookies from "universal-cookie";

class MedicoCardConsultaEntrar extends Component {
  constructor() {
    super();
    this.state = {
      doutor: {

      }
    };
  }

  componentDidMount() {
    this.fetchApi();
  }

  async fetchApi() {
    const cookies = new Cookies();
    const access_token = cookies.get("access_token");
    let url =
      "http://www.programandocomphp.com.br/conectamedico/public/api/auth/get-doctors";
    let response;
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + access_token
      }
    }).then(res => res.json().then(res => (response = res)));
    this.setState({ doutor: response[0] });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <div class="card boxHeight">
          <a
            href="javascript:"
            data-toggle="modal"
            data-target="#modal-informacoes"
          >
            <div class="item-top flex-space">
              <div class="group-avatar">
                <img src={Avatar} alt="Nome" />
                <div class="group">
                  <h6>
                    <strong>{this.state.doutor.name}</strong>
                  </h6>
                  <h6>
                    CRM {this.props.crm} {this.props.estado}
                  </h6>
                </div>
              </div>
            </div>
            <div class="item-center">
              <h3>{this.props.tituloConsulta}</h3>
              <h6>Consulta: {this.props.codConsulta}</h6>
            </div>
          </a>
          <div class="item-bottom border-top">
            <div class="content flex-space">
              <a href="teleconsulta-anuncio.php" class="btn btn-large">
                Entrar na sala
              </a>
              {this.props.tipo == "1" ? (
                <div class="group text-right">
                  <h6 class="italic">
                    Expira em
                    <br /> 10 dias
                  </h6>
                </div>
              ) : (
                <div class="group text-right">
                  <h6 class="italic">
                    Data da consulta
                    <br />
                    {this.props.data}
                  </h6>
                </div>
              )}
            </div>
          </div>
        </div>
        <MedicoModal nome={this.state.doutor.name}/>
      </div>
    );
  }
}
export default MedicoCardConsultaEntrar;
