import React, { Component, useState, useEffect } from "react";
import Logo from "../../assets/images/logo.png";
import Avatar from "../../assets/images/avatar.jpg";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import Cookies from 'universal-cookie';

// const boxCardBloc = new BoxCardLoginBloc();
// props.history.push("/marcar-consulta/1");
// event.preventDefault();
class BoxCardLogin extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchApi = this.fetchApi.bind(this);
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    this.registerUser = this.registerUser.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.fetchVerifyCPFApi = this.fetchVerifyCPFApi.bind(this);
    
  }

  componentDidMount() {
    window.mount();
  }

  handleRegisterSubmit(event) {
    event.preventDefault();
    var cpf = document.getElementById("cadastrar_cpf").value;
    var first_name = document.getElementById("first_name").value;
    var last_name = document.getElementById("last_name").value;
    var sex = document.getElementById("sex").value;
    var birthday = document.getElementById("birthday").value;
    var cellphone = document.getElementById("cellphone").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var password_repetir = document.getElementById("password_repetir").value;
    var type = "patient";
    if (password === password_repetir){
        window.confirmPasswordFail();
    }
    else {
        if (cpf !== "" && password !== "") {
            this.registerUser({ cpf, first_name, last_name, sex, birthday, cellphone, email, password, type });
        }
    }
  }

  async registerUser(params) {
      console.log(params)
    let url =
      "http://www.programandocomphp.com.br/conectamedico/public/api/register?";
    let response;
    for (var param in params) {
      url += `${param}=${params[param]}&`;
    }
    console.log(url)
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }).then(res => res.json().then(res => (response = res)));
    if (response["success"]) {
      window.location.href = "/marcar-consulta/1";
      //   this.props.history.push("/auth/consultas/marcadas");
    } else {
    }
  }

  handleNextClick() {
    var cpf = document.getElementById("cadastrar_cpf").value;
    console.log(cpf);
    if (cpf !== "") {
      this.fetchVerifyCPFApi(cpf);
    }
  }

  async fetchVerifyCPFApi(cpf) {
    let url =
      "http://www.programandocomphp.com.br/conectamedico/public/api/check-cpf?cpf="+cpf;
    let response;
    await fetch(url, {
      method: "POST"
    })
      .then(res => res.json())
      .then(res => (response = res));
    if (response["success"]) {
      window.cpfExiste();
    } else {
        window.proximo();
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    var cpf = document.getElementById("login_cpf").value;
    var password = document.getElementById("login_password").value;
    if (cpf !== "" && password !== "") {
      this.fetchApi({ cpf, password });
    }
  }

  async fetchApi(params) {
    let url =
      "http://www.programandocomphp.com.br/conectamedico/public/api/auth/login?";
    let response;
    for (var param in params) {
      url += `${param}=${params[param]}&`;
    }
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }).then(res => res.json().then(res => (response = res)));
    if (response["success"]) {
      window.location.href = "/auth/consultas/marcadas";
      //   this.props.history.push("/auth/consultas/marcadas");
      
    const cookies = new Cookies();
    cookies.set('loggedIn', true, { path: '/' });
    cookies.set('cpf', params["cpf"], { path: '/' });
    cookies.set('access_token', response["access_token"], { path: '/' });
    console.log(cookies.get('loggedIn')); // Pacman
    console.log(cookies.get('cpf')); // Pacman
    console.log(cookies.get('access_token')); // Pacman

    } else {
      window.loginFailed();
    }
  }

  render() {
    return (
      <div class="box-card-login">
        <div class="group">
          <img class="img-responsive logo" src={Logo} alt="Conecta Médico" />

          <form
            id="entrar"
            onSubmit={this.handleSubmit}
            data-toggle="validator"
          >
            <div class="d-inline">
              <h1>Entrar</h1>
              <div class="box-form">
                <div class="form-group has-feedback">
                  <input
                    type="tel"
                    name="login_cpf"
                    id="login_cpf"
                    class="form-control js-cpf"
                    placeholder="Entre com seu CPF"
                    data-error="Por favor, informe seu CPF."
                    required
                    onChange={this.handleInputChange}
                  />
                  <div class="help-block with-errors"></div>
                </div>
                <div class="form-group has-feedback">
                  <input
                    type="password"
                    name="login_password"
                    id="login_password"
                    class="form-control js-password"
                    placeholder="Coloque sua senha"
                    maxlength="12"
                    data-error="Por favor, informe sua senha."
                    required
                  />
                  <i class="fa fa-eye-slash password"></i>
                  <div class="help-block with-errors"></div>
                  <Link to="recuperar-senha" className="link-small">
                    Esqueci minha senha
                  </Link>
                </div>
                <div class="group-btn">
                  <button type="submit" class="btn btn-full">
                    Entrar
                  </button>
                  <a
                    href="javascript:"
                    class="btn btn-clean btn-full js-cadastrar"
                  >
                    Cadastrar
                  </a>
                </div>
              </div>
            </div>
          </form>

          <form
            id="cadastrar"
            action="javascript:"
            data-toggle="validator"
            style={{ display: "none" }}
          >
            <div class="d-inline">
              <h1>Cadastrar</h1>
              <h6>
                Informe seu CPF e crie uma conta para realizar videoschamadas e
                acompanhar consultas online no <strong>Conecta Médico.</strong>
              </h6>
              <div class="box-form">
                <div class="form-group has-feedback">
                  <input
                    type="tel"
                    name="cadastrar_cpf"
                    id="cadastrar_cpf"
                    class="form-control js-cpf"
                    placeholder="Entre com seu CPF"
                    // data-error="CPF já cadastrado."
                    required
                  />
                  <div class="help-block with-errors"></div>
                </div>
                <div class="group-btn">
                  <a
                    href="javascript:"
                    class="btn btn-clean btn-full js-cancelar"
                  >
                    Cancelar
                  </a>
                  <button
                    type="submit"
                    onClick={this.handleNextClick}
                    class="btn btn-full js-proximo"
                  >
                    Próximo
                  </button>
                </div>
              </div>
            </div>
          </form>

          <form
            id="finalizar-cadastro"
            data-toggle="validator"
            onSubmit={this.handleRegisterSubmit}
            style={{ display: "none" }}
          >
            <div class="d-inline">
              <h1>Finalizar cadastro</h1>
              <h6>
                Para continuar usando o <strong>Conecta Médico</strong>,
                finalize seu cadastro.
              </h6>
              <div class="d-inline mt-20">
                <div class="flex-space">
                  <div class="group-flex">
                    <h6>CPF</h6>
                    <h6 class="cpf">999.999.999-99</h6>
                  </div>
                  <a href="javascript:" class="btn-link small js-voltar">
                    Não é meu CPF »
                  </a>
                </div>
                <a href="javascript:" class="box-file-avatar js-file-link">
                  <img class="img-responsive" src={Avatar} alt="Nome" />
                  <span class="btn-link small">Alterar</span>
                </a>
                <input type="file" class="js-file" />
              </div>
              <div class="box-form">
                <div class="form-group has-feedback">
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    class="form-control"
                    placeholder="Nome"
                    data-error="Por favor, informe seu nome."
                    required
                  />
                  <div class="help-block with-errors"></div>
                </div>
                <div class="form-group has-feedback">
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    class="form-control"
                    placeholder="Sobrenome"
                    data-error="Por favor, informe seu sobrenome."
                    required
                  />
                  <div class="help-block with-errors"></div>
                </div>
                <div class="form-group has-feedback">
                  <select name="sex" id="sex" class="form-control">
                    <option selected hidden value="">
                      Sexo
                    </option>
                    <option value="male">Masculino</option>
                    <option value="female">Feminino</option>
                  </select>
                </div>
                <div class="form-group has-feedback">
                  <input
                    type="tel"
                    name="birthday"
                    id="birthday"
                    class="form-control js-data"
                    placeholder="Data de Nascimento"
                    data-error="Por favor, informe sua data de nascimento."
                    required
                  />
                  <div class="help-block with-errors"></div>
                </div>
                <div class="form-group has-feedback">
                  <input
                    type="tel"
                    name="cellphone"
                    id="cellphone"
                    class="form-control js-tel"
                    placeholder="Seu celular"
                  />
                </div>
                <div class="form-group has-feedback">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="form-control"
                    placeholder="Seu e-mail"
                    data-error="Por favor, informe seu e-mail."
                    required
                  />
                  <div class="help-block with-errors"></div>
                </div>
                <div class="form-group has-feedback">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    class="form-control js-password"
                    placeholder="Senha"
                    maxlength="12"
                    data-error="Por favor, informe uma senha segura."
                    required
                  />
                  <i class="fa fa-eye-slash password"></i>
                  <div class="help-block with-errors"></div>
                  <h6 class="mb-20">
                    • Pelo menos uma letra
                    <br />
                    • Pelo menos um número
                    <br />• No mínimo 8 caracteres
                  </h6>
                </div>
                <div class="form-group has-feedback">
                  <input
                    type="password"
                    name="password_repetir"
                    id="password_repetir"
                    class="form-control js-password"
                    placeholder="Repetir a senha"
                    maxlength="12"
                    data-error="Por favor, repita sua senha."
                    required
                  />
                  <i class="fa fa-eye-slash password"></i>
                  <div class="help-block with-errors"></div>
                </div>
                <div class="group-btn">
                  <a
                    href="javascript:"
                    class="btn btn-clean btn-full btn-icon js-voltar"
                  >
                    <i class="la la-arrow-left"></i>voltar
                  </a>
                  <button type="submit" class="btn btn-full">
                    Cadastrar
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
    );
  }
}

export default BoxCardLogin;
