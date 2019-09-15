import React, {Component} from 'react';
import Avatar from '../../assets/images/avatar.jpg';
import MedicoCard from '../../components/medico-card';
class MarcarConsulta4Confirmacao extends Component {

    componentDidMount(){
        window.mount()  
    }
    render(){return (
        <div>
        <main class="main">
            <div class="container">
                <div class="row flex-order">
    
                    <div class="col-xs-12 col-sm-7 col-md-8">
                        <div class="d-inline mb-30">
                            <h1 class="big mb-10">Pagamento aprovado.</h1>
                            <h3>A sala virtual já está preparada.</h3>
                            <h3>Use o voucher abaixo para informar seu médico que sua consulta poderá ser realizada.</h3>
                        </div>
                        <div class="d-inline mb-30">
                            <h2 class="small">Voucher da Teleconsulta:</h2>
                            <h3 class="big">CM45KO6R7</h3>
                            <h6 class="default">OBS.: Esta sala irá expirar em 10/12/2019.</h6>
                        </div>
                    </div>
    
                    <div class="col-xs-12 col-sm-5 col-md-4 order-last mt-mob-30">
                        <h2 class="small mb-10">Dados do seu médico escolhido:</h2>
                        <MedicoCard/>
                    </div>
    
                    <div class="col-xs-12">
                        <h2 class="small mb-10">Entre em contato com o médico e marque a data de sua consulta.</h2>
                    </div>
                        <div class="col-xs-12 col-sm-6 col-md-3">
                            <a href="tel:1123657518" class="card boxHeight">
                                <div class="item-top full flex-space">
                                    <div class="group">
                                        <h6><strong>Telefone</strong></h6>
                                        <h6>(11) 2365-7518</h6>
                                    </div>
                                    <div class="group-icon">
                                        <h6>Mandar<br/> mensagem</h6>
                                        <i class="la la-phone"></i>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-3">
                            <a href="https://wa.me/5511923657518?text=Como%20podemos%20te%20ajuda?" target="_blank" class="card boxHeight">
                                <div class="item-top full flex-space">
                                    <div class="group">
                                        <h6><strong>WhatsApp</strong></h6>
                                        <h6>(11) 92365-7518</h6>
                                    </div>
                                    <div class="group-icon">
                                        <h6>Mandar<br/> mensagem</h6>
                                        <i class="la la-whatsapp"></i>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-3">
                            <a href="mailto:contato@email.com" class="card boxHeight">
                                <div class="item-top full flex-space">
                                    <div class="group">
                                        <h6><strong>E-mail</strong></h6>
                                        <h6>contato@email.com</h6>
                                    </div>
                                    <div class="group-icon">
                                        <h6>Mandar<br/> e-mail</h6>
                                        <i class="la la-envelope"></i>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-3">
                            <a href="#!" class="card boxHeight">
                                <div class="item-top full flex-space">
                                    <div class="group">
                                        <h6><strong>Chat</strong></h6>
                                        <h6>Mensagem</h6>
                                    </div>
                                    <div class="group-icon">
                                        <h6>Conversar</h6>
                                        <i class="la la-comments"></i>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
    
                </div>
        </main>
        </div>
    );}
}

export default MarcarConsulta4Confirmacao;
