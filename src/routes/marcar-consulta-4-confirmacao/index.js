import React, {Component} from 'react';
import Avatar from '../../assets/images/avatar.jpg';
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
                        <a href="#!" data-toggle="modal" data-target="#modal-informacoes" class="card boxHeight">
                            <div class="item-top flex-space">
                                <div class="group-avatar">
                                    <img src={Avatar} alt="Nome"/>
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
                                <h6>Avenida da Aclimação, 56<br/>
                                Aclimação - São Paulo</h6>
                            </div>
                        </a>
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
        <div id="modal-informacoes" class="modal" tabindex="-1" role="dialog">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content js-fullheight-mob">
                        <div class="modal-header">
                            <div class="flex-space">
                                <div class="group-avatar">
                                    <img src={Avatar} alt="Nome" />
                                    <div class="group">
                                        <h3>Dr. Médico Josival</h3>
                                    </div>
                                </div>
                                <div class="group-avaliar box-right">
                                    <i class="la la-star"></i>
                                    <h6>3,0</h6>
                                </div>
                            </div>
                            <button type="button" class="close" data-dismiss="modal">
                                <i class="la la-times"></i>
                            </button>
                        </div>
                        <div class="modal-body">
                            <article>
                                <div class="col-xs-12 col-sm-6">
                                    <h3 class="mb-20">Sobre o médico</h3>
                                    <div class="group-flex-h mv-10">
                                        <i class="la la-info-circle default"></i>
                                        <div class="group">
                                            <h6><strong>Ortopedista</strong></h6>
                                            <h6>CRM 123456 SP</h6>
                                        </div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in massa hendrerit, eleifend diam sed, egestas neque. Morbi pretium urna et tellus iaculis, id egestas mi gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                                    <br />
                                    <p>Nullam sit amet turpis accumsan, tincidunt nisi ac, bibendum odio. In lobortis vitae erat at sagittis. Integer sed mauris euismod, consequat magna ut, faucibus odio. Proin euismod libero at lorem scelerisque, in ullamcorper dolor consectetur. Nam luctus elit ac est molestie faucibus.</p>
                                    <br />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in massa hendrerit, eleifend diam sed, egestas neque. Morbi pretium urna et tellus iaculis, id egestas mi gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam sit amet turpis accumsan, tincidunt nisi ac, bibendum odio. In lobortis vitae erat at sagittis. Integer sed mauris euismod, consequat magna ut, faucibus odio. Proin euismod libero at lorem scelerisque, in ullamcorper dolor consectetur. Nam luctus elit ac est molestie faucibus.</p>
                                </div>
                                <div class="col-xs-12 col-sm-6 mt-mob-30">
                                    <h3 class="mb-20">Endereço</h3>
                                    <div class="group-flex-h mt-10 mb-20">
                                        <i class="la la-map-marker primary"></i>
                                        <div class="group">
                                            <h6>Avenida da Aclimação, 56<br />
                                                Aclimação - São Paulo<br />
                                                CEP: 01531000</h6>
                                        </div>
                                    </div>
                                    <div class="iframe-map">
                                        <div class="embed-responsive embed-responsive-16by9">
                                            <iframe class="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7310.765447688993!2d-46.691212!3d-23.626461!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3377dd689743d274!2sBig+Fish+Digital!5e0!3m2!1spt-BR!2sus!4v1548934805267" width="100%" height="100%" frameborder="0" style={{ border: 0 }} allowfullscreen></iframe>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );}
}

export default MarcarConsulta4Confirmacao;
