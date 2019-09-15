import React, { Component } from 'react';
import Avatar from '../../assets/images/avatar.jpg';
import MedicoModal from '../medico-modal';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class MedicoCardConsultaRealizada extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="card boxHeight">
                <Link to="/auth/consultas/realizadas-perfil">

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
                        <div class="content flex-space">
                            <div class="group">
                                <h3>{this.props.tituloConsulta}</h3>
                                <h6>Consulta: {this.props.codConsulta}</h6>
                            </div>
                            <div class="group text-right">
                                <h6 class="italic">Realizada em<br /> {this.props.dataRealizada}    </h6>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}
export default MedicoCardConsultaRealizada;