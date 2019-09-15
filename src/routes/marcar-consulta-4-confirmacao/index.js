import React, {Component} from 'react';
import Avatar from '../../assets/images/avatar.jpg';
import MedicoCard from '../../components/medico-card';
import ContatoCardIcon from '../../components/contato-card-icon';
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
                            <ContatoCardIcon icon="phone" titulo="Telefone" subtitulo="(11) 2365-7518" mensagem="Mandar Mensagem" link="tel:1123657518" targetBlank={false}/>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-3">
                            <ContatoCardIcon icon="whatsapp" titulo="WhatsApp" subtitulo="(11) 92365-75188" mensagem="Mandar Mensagem" link="https://wa.me/5511923657518?text=Como%20podemos%20te%20ajuda?" targetBlank={true}/>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-3">
                            <ContatoCardIcon icon="envelope" titulo="E-mail" subtitulo="contato@email.com" mensagem="Mandar e-mail" link="mailto:contato@email.com" targetBlank={false}/>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-3">
                            <ContatoCardIcon icon="comments" titulo="Chat" subtitulo="Mensagem" mensagem="Conversar" link="#!" targetBlank={false}/>
                        </div>
                        
                    </div>
    
                </div>
        </main>
        </div>
    );}
}

export default MarcarConsulta4Confirmacao;
