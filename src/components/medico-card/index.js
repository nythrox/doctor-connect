import React, { Component } from 'react';
import Avatar from '../../assets/images/avatar.jpg';
import MedicoModal from '../medico-modal';
function MedicoCard() {
    return (<div >

        <a href="#!" data-toggle="modal" data-target="#modal-informacoes" class="card boxHeight">
            <div class="item-top flex-space">
                <div class="group-avatar">
                    <img src={Avatar} alt="Nome" />
                    <div class="group">
                        <h6><strong>Dr. Médico Josival</strong></h6>
                        <h6>CRM 123456 SP</h6>
                    </div>
                </div>
                <div class="group-avaliar">
                    <i class="la la-star"></i>
                    <h6>3,0</h6>
                </div>
            </div>
            <div class="item-center">
                <h6>Avenida da Aclimação, 56<br />
                    Aclimação - São Paulo</h6>
            </div>
        </a>
        <MedicoModal />
        </div>
    );
}
export default MedicoCard;