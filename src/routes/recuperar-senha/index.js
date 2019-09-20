import React, { Component } from "react";
import Logo from "../../assets/images/logo.png";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
class RecuperarSenha extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchVerifyCPFApi = this.fetchVerifyCPFApi.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    var cpf = document.getElementById("cadastrar_cpf").value;
    this.fetchVerifyCPFApi(cpf);
    console.log(cpf)
  }
  async fetchVerifyCPFApi(cpf) {
    let url =
      "http://www.programandocomphp.com.br/conectamedico/public/api/recover-password?cpf="+cpf;
      console.log(url)
    let response;
    await fetch(url, {
      method: "POST"
    })
      .then(res => res.json())
      .then(res => (response = res));
      console.log(response["success"])
    if (response["success"]) {
        window.senhaRecuperada();
        this.props.history.push("/");
    } else {
        window.cpfNaoExiste();
    }
  }
  render() {
    return (
      <div className="pg-login pg-full-mob">
        <main class="main">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-sm-6 col-lg-4 col-sm-offset-3 col-lg-offset-4 js-fullheight-mob">
                <div class="box-card-login">
                  <div class="group">
                    <img
                      class="img-responsive logo"
                      src={Logo}
                      alt="Conecta Médico"
                    />
                    <form
                      id="recuperar_senha"
                      onSubmit={this.handleSubmit}
                      data-toggle="validator"
                    >
                      <div class="d-inline">
                        <h1>Recuperar senha</h1>
                        <h6>
                          Informe seu CPF para encaminharmos uma nova senha de
                          acesso para o e-mail cadastrado.
                        </h6>
                        <div class="box-form">
                          <div class="form-group has-feedback">
                            <input
                              type="tel"
                              name="cadastrar_cpf"
                              id="cadastrar_cpf"
                              class="form-control js-cpf"
                              placeholder="Entre com seu CPF"
                              data-error="Por favor, informe seu CPF."
                              required
                            />
                            <div class="help-block with-errors"></div>
                            <div class="alert-input hidden">
                              E-mail encaminhado.
                              <br />
                              Siga as instruções contidas no e-mail informado
                              para redefinir a sua senha.
                            </div>
                          </div>
                          <div class="group-btn">
                            <Link
                              to="../"
                              className="btn btn-clean btn-full btn-icon"
                            >
                              <i class="la la-arrow-left"></i>voltar
                            </Link>
                            <button class="btn btn-full js-recuperar">
                              Recuperar
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="info-footer">
                    <h6>Ao se cadastrar, você concorda com nossos</h6>
                    <a href="termos-de-uso.php" class="link-small">
                      Termos, Política de Dados e Política de Cookies.
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default RecuperarSenha;
