import React, { Component } from 'react';
import Avatar from '../../assets/images/avatar.jpg';
import MedicoModal from '../medico-modal';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class MedicoCardSolicitacaoConsulta extends Component {

    render() {
        return (<div >

            <div class="card boxHeight">
                <a href="javascript:" data-toggle="modal" data-target="#modal-informacoes">
                    <span class="msg-hidden">
                        <h6>Você recusou a consulta.<br />Ela foi cancelada.</h6>
                    </span>
                    <div class="item-top flex-space">
                        <div class="group-avatar">
                            <img src={Avatar} alt="Nome" />
                            <div class="group">
                                <h6><strong>{this.props.nome}</strong></h6>
                                <h6>CRM {this.props.crm} {this.props.estado}</h6>
                            </div>
                        </div>
                        <div class="group-avaliar">
                            <i class="la la-star"></i>
                            <h6>3,0</h6>
                        </div>
                    </div>
                    <div class="item-center">
                        <h3>{this.props.tituloConsulta}</h3>
                        <h6>Consulta: {this.props.codConsulta}</h6>
                    </div>
                </a>
                <div class="item-bottom border-top">
                    <div class="content flex-space">
                        <Link to="/auth/consultas/marcadas-perfil" className="btn btn-full">Aceitar</Link>
                        <a href="javascript:" class="btn btn-clean btn-full js-card-recusar">Recusar</a>
                    </div>
                </div>
            </div>
            <MedicoModal />
        </div>
        );
    }
}
export default MedicoCardSolicitacaoConsulta;