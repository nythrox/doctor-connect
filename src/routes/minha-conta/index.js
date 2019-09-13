import React, { Component } from 'react'; import Avatar from '../../assets/images/avatar.jpg';
import CardPagamento from '../../components/card-pagamento';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Default from '../../assets/images/default.jpg';

class MinhaConta extends Component {

    componentDidMount() {
        window.mount()
    }
    render() {
        return (
            <div>
                <section class="tab-header pb-tab">
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="flex-space mb-10">
                                    <h1>Minha conta</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="tab-line mod-2">
                    <div class="container">
                        <div class="row">

                            <div class="col-xs-12 pr-mob-0">
                                <ul class="nav nav-tab tab-scroll-mob">
                                    <li class="active"><a href="#informacoes" data-toggle="tab">Informações</a></li>
                                    <li><a href="#senha" data-toggle="tab">Senha</a></li>
                                    <li><a href="#convenio" data-toggle="tab">Convênio</a></li>
                                </ul>
                            </div>

                            <div class="col-xs-12 col-lg-10 col-lg-offset-1 col-mob-full">
                                <div class="tab-content">
                                    
                            <div class="tab-pane active" id="informacoes">
                                        <div class="card-clean card-mob-full">
                                            <form action="#!">
                                                <div class="box-form-big">
                                                    <div class="col-xs-12">
                                                        <div class="title">
                                                            <h3>Informações de cadastro</h3>
                                                            <h6>Altera e confirma as informações de sua conta para poder utilizar todas os serviços do  Conecta Médico.</h6>
                                                        </div>
                                                        <div class="d-inline mv-30">
                                                            <a href="javascript:" class="box-file-avatar js-file-link">
                                                                <img class="img-responsive" src={Avatar} alt="Nome" />
                                                                <span class="btn-link small">Alterar</span>
                                                            </a>
                                                            <input type="file" class="js-file" />
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-12">
                                                        <div class="form-group">
                                                            <label for="cpf">CPF</label>
                                                            <input type="tel" name="cpf" id="cpf" class="form-control js-cpf" value="528.028.292-29" disabled />
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-12 col-sm-6">
                                                        <div class="form-group">
                                                            <label for="nome">Nome</label>
                                                            <input type="text" name="nome" id="nome" class="form-control" value="Andrei" />
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-12 col-sm-6">
                                                        <div class="form-group">
                                                            <label for="sobrenome">Sobrenome</label>
                                                            <input type="text" name="sobrenome" id="sobrenome" class="form-control" value="Masharin" />
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-12 col-sm-6">
                                                        <div class="form-group">
                                                            <label for="email">E-mail</label>
                                                            <input type="email" name="email" id="email" class="form-control" value="email@email.com" />
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-12 col-sm-6">
                                                        <div class="form-group">
                                                            <label for="celular">Celular</label>
                                                            <input type="tel" name="celular" id="celular" class="form-control js-tel" value="(11) 94536-8726" />
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-12 col-sm-6">
                                                        <div class="form-group">
                                                            <label for="sexo">Sexo</label>
                                                            <select name="sexo" id="sexo" class="form-control">
                                                                <option hidden value="">Sexo</option>
                                                                <option value="01" selected>Masculino</option>
                                                                <option value="02">Feminino</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-12 col-sm-6">
                                                        <div class="form-group">
                                                            <label for="data_nascimento">Data de Nascimento</label>
                                                            <input type="tel" name="data_nascimento" id="data_nascimento" class="form-control js-data" value="10/04/1990" />
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-12 mt-30">
                                                        <div class="group-btn no-flex-xs">
                                                            <a href="javascript:" class="btn btn-full">Salvar</a>
                                                            <a href="javascript:" class="btn btn-clean btn-full">Excluir conta</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    <div class="tab-pane" id="senha">
                                        <div class="card-clean card-mob-full">
                                            <form action="#!">
                                                <div class="box-form-big">
                                                    <div class="col-xs-12">
                                                        <div class="title mb-30">
                                                            <h3>Troque sua senha aqui</h3>
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-12">
                                                        <div class="form-group">
                                                            <label for="password_atual">Senha atual</label>
                                                            <input type="password" name="password_atual" id="password_atual" class="form-control js-password" maxlength="12" />
                                                            <i class="fa fa-eye-slash password"></i>
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-12">
                                                        <div class="form-group">
                                                            <label for="password_nova">Nova senha</label>
                                                            <input type="password" name="password_nova" id="password_nova" class="form-control js-password" maxlength="12" />
                                                            <i class="fa fa-eye-slash password"></i>
                                                            <h6 class="mv-20">
                                                                • Pelo menos uma letra<br />
                                                                • Pelo menos um número<br />
                                                                • No mínimo 8 caracteres
                                                    </h6>
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-12 col-sm-5 mt-30">
                                                        <div class="group-btn no-flex-xs">
                                                            <a href="javascript:" class="btn btn-full">Salvar</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    <div class="tab-pane" id="convenio">
                                        <div class="card-clean card-aside">
                                            <div class="flex-space no-flex-xs">
                                                <div class="box-aside boxHeight">
                                                    <div class="d-inline ph-20 mb-50">
                                                        <h3>Convênios cadastrados:</h3>
                                                    </div>
                                                    <aside>
                                                        <ul class="nav">
                                                            <li class="active">
                                                                <a href="#!">
                                                                    <div class="group-img">
                                                                        <img class="img-responsive" src={Default} alt="Nome" />
                                                                        <h6>Amil</h6>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#!">
                                                                    <div class="group-img">
                                                                        <img class="img-responsive" src={Default} alt="Nome" />
                                                                        <h6>Amil</h6>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#!">
                                                                    <div class="group-img">
                                                                        <img class="img-responsive" src={Default} alt="Nome" />
                                                                        <h6>Amil</h6>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </aside>
                                                    <div class="d-inline ph-20 mt-20">
                                                        <a href="#!" class="btn btn-clean btn-full">Adicionar mais convênio</a>
                                                    </div>
                                                </div>
                                                <div class="box-content boxHeight">
                                                    <h6 class="mb-50">Cadastre e altere dados do convênio de sua conta.</h6>
                                                    <form action="">
                                                        <div class="row">
                                                            <div class="col-xs-12">
                                                                <div class="form-group">
                                                                    <select name="convenio" id="convenio" class="form-control">
                                                                        <option hidden value="">Convênio</option>
                                                                        <option value="01">Item 01</option>
                                                                        <option value="02">Item 02</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div class="col-xs-12">
                                                                <div class="form-group">
                                                                    <select name="rede_atendimento" id="rede_atendimento" class="form-control">
                                                                        <option hidden value="">Rede de atendimento</option>
                                                                        <option value="01">Item 01</option>
                                                                        <option value="02">Item 02</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div class="col-xs-12">
                                                                <div class="form-group">
                                                                    <input type="tel" name="numero_carteirinha" id="numero_carteirinha" class="form-control" placeholder="Número da carteirinha" />
                                                                </div>
                                                            </div>
                                                            <div class="col-xs-12">
                                                                <div class="form-group">
                                                                    <input type="tel" name="data_nascimento_convenio" id="data_nascimento_convenio" class="form-control js-data" placeholder="Data de nascimento" />
                                                                </div>
                                                            </div>
                                                            <div class="col-xs-12 mt-30">
                                                                <div class="group-btn no-flex-xs">
                                                                    <a href="javascript:" class="btn btn-full">Salvar</a>
                                                                    <a href="javascript:" class="btn btn-clean btn-full">Excluir</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default MinhaConta;
