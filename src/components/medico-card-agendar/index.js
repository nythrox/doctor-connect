import React, { Component } from 'react';
import Avatar from '../../assets/images/avatar.jpg';
import MedicoModal from '../medico-modal';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class MedicoCardAgendar extends Component {



    constructor(props) {
        console.log(props);
        super(props);
        console.log(props);
    }

    render() {
        return (<div >

            <div class="card boxHeight">
                <a href="#!" data-toggle="modal" data-target="#modal-informacoes">
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
                        <h6>{this.props.endereco1}<br />
                            {this.props.endereco2}</h6>
                    </div>
                </a>
                <div class="item-bottom border-top">
                    <div class="content flex-space">
                        <Link to="/marcar-consulta/4" className="btn btn-large">
                            Agendar
                                    </Link>
                        {
                            this.props.preco == undefined ? "" : 
                            <div class="group text-right">
                                <h6><strong class="success">R$ {this.props.preco}</strong></h6>
                                <h6 class="italic">a consulta</h6>
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
export default MedicoCardAgendar;