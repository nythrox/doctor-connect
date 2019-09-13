import React, { Component } from 'react';
import Logo from '../../assets/images/logo.png';
import Avatar from '../../assets/images/avatar.jpg';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
class Homepage extends Component {



    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        window.mount()
    }

    handleSubmit(event) {
        // this.props.history.push("/marcar-consulta/1");
        // event.preventDefault();
    }

    render() {
        return (

            <div className="pg-login">
                <main className="main">

                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12 col-sm-6 col-lg-4 col-lg-offset-1 col-sm-push-6">
                                <div class="box-card-login">
                                    <div class="group">
                                        <img class="img-responsive logo" src={Logo} alt="Conecta Médico" />


                                        <form id="entrar" onSubmit={this.handleSubmit} action="/marcar-consulta/1" data-toggle="validator">
                                            <div class="d-inline">
                                                <h1>Entrar</h1>
                                                <div class="box-form">
                                                    <div class="form-group has-feedback">
                                                        <input type="tel" name="login_cpf" id="login_cpf" class="form-control js-cpf" placeholder="Entre com seu CPF" data-error="Por favor, informe seu CPF." required />
                                                        <div class="help-block with-errors"></div>
                                                    </div>
                                                    <div class="form-group has-feedback">
                                                        <input type="password" name="login_password" id="login_password" class="form-control js-password" placeholder="Coloque sua senha" maxlength="12" data-error="Por favor, informe sua senha." required />
                                                        <i class="fa fa-eye-slash password"></i>
                                                        <div class="help-block with-errors"></div>
                                                        <Link to="recuperar-senha" className="link-small">Esqueci minha senha</Link>
                                                    </div>
                                                    <div class="group-btn">
                                                        <button type="submit" class="btn btn-full">Entrar</button>
                                                        <a href="javascript:" class="btn btn-clean btn-full js-cadastrar">Cadastrar</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>


                                        <form id="cadastrar" action="javascript:" data-toggle="validator" style={{ display: 'none' }}>
                                            <div class="d-inline">
                                                <h1>Cadastrar</h1>
                                                <h6>Informe seu CPF e crie uma conta para realizar videoschamadas e acompanhar consultas online no <strong>Conecta Médico.</strong></h6>
                                                <div class="box-form">
                                                    <div class="form-group has-feedback">
                                                        <input type="tel" name="cadastrar_cpf" id="cadastrar_cpf" class="form-control js-cpf" placeholder="Entre com seu CPF" data-error="CPF já cadastrado." required />
                                                        <div class="help-block with-errors"></div>
                                                    </div>
                                                    <div class="group-btn">
                                                        <a href="javascript:" class="btn btn-clean btn-full js-cancelar">Cancelar</a>
                                                        <button type="submit" class="btn btn-full js-proximo">Próximo</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>


                                        <form id="finalizar-cadastro" onSubmit={this.handleSubmit} data-toggle="validator" style={{ display: 'none' }}>
                                            <div class="d-inline">
                                                <h1>Finalizar cadastro</h1>
                                                <h6>Para continuar usando o <strong>Conecta Médico</strong>, finalize seu cadastro.</h6>
                                                <div class="d-inline mt-20">
                                                    <div class="flex-space">
                                                        <div class="group-flex">
                                                            <h6>CPF</h6>
                                                            <h6 class="cpf">999.999.999-99</h6>
                                                        </div>
                                                        <a href="javascript:" class="btn-link small js-voltar">Não é meu CPF »</a>
                                                    </div>
                                                    <a href="javascript:" class="box-file-avatar js-file-link">
                                                        <img class="img-responsive" src={Avatar} alt="Nome" />
                                                        <span class="btn-link small">Alterar</span>
                                                    </a>
                                                    <input type="file" class="js-file" />
                                                </div>
                                                <div class="box-form">
                                                    <div class="form-group has-feedback">
                                                        <input type="text" name="nome" id="nome" class="form-control" placeholder="Nome" data-error="Por favor, informe seu nome." required />
                                                        <div class="help-block with-errors"></div>
                                                    </div>
                                                    <div class="form-group has-feedback">
                                                        <input type="text" name="sobrenome" id="sobrenome" class="form-control" placeholder="Sobrenome" data-error="Por favor, informe seu sobrenome." required />
                                                        <div class="help-block with-errors"></div>
                                                    </div>
                                                    <div class="form-group has-feedback">
                                                        <select name="sexo" id="sexo" class="form-control">
                                                            <option selected hidden value="">Sexo</option>
                                                            <option value="01">Masculino</option>
                                                            <option value="02">Feminino</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group has-feedback">
                                                        <input type="tel" name="data_nascimento" id="data_nascimento" class="form-control js-data" placeholder="Data de Nascimento" data-error="Por favor, informe sua data de nascimento." required />
                                                        <div class="help-block with-errors"></div>
                                                    </div>
                                                    <div class="form-group has-feedback">
                                                        <input type="tel" name="celular" id="celular" class="form-control js-tel" placeholder="Seu celular" />
                                                    </div>
                                                    <div class="form-group has-feedback">
                                                        <input type="email" name="email" id="email" class="form-control" placeholder="Seu e-mail" data-error="Por favor, informe seu e-mail." required />
                                                        <div class="help-block with-errors"></div>
                                                    </div>
                                                    <div class="form-group has-feedback">
                                                        <input type="password" name="password_cadastro" id="password_cadastro" class="form-control js-password" placeholder="Senha" maxlength="12" data-error="Por favor, informe uma senha segura." required />
                                                        <i class="fa fa-eye-slash password"></i>
                                                        <div class="help-block with-errors"></div>
                                                        <h6 class="mb-20">
                                                            • Pelo menos uma letra<br />
                                                            • Pelo menos um número<br />
                                                            • No mínimo 8 caracteres
                                        </h6>
                                                    </div>
                                                    <div class="form-group has-feedback">
                                                        <input type="password" name="password_repetir" id="password_repetir" class="form-control js-password" placeholder="Repetir a senha" maxlength="12" data-error="Por favor, repita sua senha." required />
                                                        <i class="fa fa-eye-slash password"></i>
                                                        <div class="help-block with-errors"></div>
                                                    </div>
                                                    <div class="group-btn">
                                                        <a href="javascript:" class="btn btn-clean btn-full btn-icon js-voltar">
                                                            <i class="la la-arrow-left"></i>voltar
                                        </a>
                                                        <button type="submit" class="btn btn-full">Cadastrar</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>

                                    </div>
                                    <div class="info-footer">
                                        <h6>Ao se cadastrar, você concorda com nossos</h6>
                                        <a href="termos-de-uso.php" class="link-small">Termos, Política de Dados e Política de Cookies.</a>
                                    </div>
                                </div>
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
    // return (
    // );
}

export default Homepage;
