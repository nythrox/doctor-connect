import React, { Component } from 'react';
import Avatar from '../../assets/images/avatar.jpg';
import MedicoModal from '../medico-modal';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class ContatoCardIcon extends Component {



    constructor(props) {
        super(props);
    }
    getMessage(message){
        return (
            message.split(" ").map((i)=>{return(
                <span>
                    {i}<br/>
                </span>
            )})
        )
    }
    render() {
        return (
            <a href={this.props.link} target={this.props.targetBlank ? "_blank" : null} class="card boxHeight">
                <div class="item-top full flex-space">
                    <div class="group">
                        <h6><strong>{this.props.titulo}</strong></h6>
                        <h6>{this.props.subtitulo}</h6>
                    </div>
                    <div class="group-icon">
                        <h6>{this.getMessage(this.props.mensagem)}</h6>
                        <i className={"la la-"+this.props.icon}></i>
                    </div>
                </div>
            </a>
        );
    }
}
export default ContatoCardIcon;