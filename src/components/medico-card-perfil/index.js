import React, { Component } from 'react';
import Avatar from '../../assets/images/avatar.jpg';
import MedicoModal from '../medico-modal';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class MedicoCardPerfil extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="card boxHeight">
                <Link to="/auth/medico-perfil">
                    <div class="item-top flex-space">
                        <div class="group-avatar">
                            <img src={Avatar} alt="Nome" />
                            <div class="group">
                                <h3>{this.props.nome}</h3>
                                <h6><strong>{this.props.profissao}</strong></h6>
                                <h6>CRM {this.props.crm} {this.props.estado}</h6>
                            </div>
                        </div>
                    </div>
                    <div class="item-center">
                        <div class="content flex-space">
                            <div class="group">
                                <h6 class="italic">Ultima consulta<br /> {this.props.dataRealizada}</h6>
                            </div>
                            {
                                this.props.compartilhandoConsultas ? 
                                <div class="group text-right">
                                    <h6 class="success">Compartilhando<br /> consultas</h6>
                                </div> :
                                null
                            }
                        </div>
                    </div></Link>
            </div>
        );
    }
}
export default MedicoCardPerfil;