import React, { Component } from 'react';
import BoxCardLogin from '../../components/box-card-login';
class Homepage extends Component {



    render() {
        return (
            <div className="pg-login">
                <main className="main">

                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12 col-sm-6 col-lg-4 col-lg-offset-1 col-sm-push-6">
                                <BoxCardLogin/>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-sm-pull-6 col-lg-pull-5">
                                <h2 class="mb-20">A teleconsulta facilita o atendimento entre médico e paciente.</h2>
                                <h3 class="mb-20">Realize consultas através de uma sala virtual e acompanhe seu atendimento pelo Conecta Médico.</h3>
                                <h3 class="check"><i class="la la-check"></i>Acompanhe suas consultas</h3>
                                <h3 class="check"><i class="la la-check"></i>Busque médicos especialistas em várias áreas</h3>
                                <h3 class="check"><i class="la la-check"></i>Tenha as anotações e prescrições nas mãos</h3>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default Homepage;
