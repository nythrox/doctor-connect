import React, {Component} from 'react';
import Avatar from '../../assets/images/avatar.jpg';
class MedicoModal extends Component{
    render(){
    return (
        <div id="modal-informacoes" class="modal" tabindex="-1" role="dialog">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content js-fullheight-mob">
                        <div class="modal-header">
                            <div class="flex-space">
                                <div class="group-avatar">
                                    <img src={Avatar} alt="Nome" />
                                    <div class="group">
                                        {console.log(this.props.nome)}
                                        <h3>{this.props.nome === undefined ? "Dr. Médico Josival" : this.props.nome}</h3>
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
        );}
}
export default MedicoModal;