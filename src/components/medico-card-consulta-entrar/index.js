import React, { Component } from 'react';
import Avatar from '../../assets/images/avatar.jpg';
import MedicoModal from '../medico-modal';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class MedicoCardConsultaEntrar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<div >
            <div class="card boxHeight">
                <a href="javascript:" data-toggle="modal" data-target="#modal-informacoes">
                    <div class="item-top flex-space">
                        <div class="group-avatar">
                            <img src={Avatar} alt="Nome" />
                            <div class="group">
                                <h6><strong>{this.props.nome}</strong></h6>
                                <h6>CRM {this.props.crm} {this.props.estado}</h6>
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
                        <a href="teleconsulta-anuncio.php" class="btn btn-large">Entrar na sala</a>
                        {
                            this.props.tipo == "1" ?
                                <div class="group text-right">
                                    <h6 class="italic">Expira em<br /> 10 dias</h6>
                                </div>
                                :
                                <div class="group text-right">
                                    <h6 class="italic">Data da consulta<br />12/09/2019</h6>
                                </div>
                        }
                    </div>
                </div>
            </div>
            <MedicoModal />
        </div>
        );
    }
}
export default MedicoCardConsultaEntrar;