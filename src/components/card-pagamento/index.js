import React from 'react';
import Visa from '../../assets/images/icon-visa.svg';
import CVV from '../../assets/images/icon-cvv.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function CardPagamento() {
    return (
        <div>
<div class="card-clean">
    <div class="top">
        <h1>Escolha forma de pagamento</h1>
        <h6>Finalize o pagamento para fazer sua teleconsulta.</h6>
    </div>
    <div class="list">
        <div class="group-list flex">
            <div class="has-feedback">
                <div class="check-custom">
                    <div class="item">
                        <input id="cartao_credito" type="radio" name="radio" required/>
                        <label for="cartao_credito">
                            <span class="group">
                                <h6><strong>Cartão de Crédito</strong></h6>
                                <h6>R$ 70,99 a consulta</h6>
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        </div>

        <div class="box-form-fade js-form-list" style={{display:"none"}}>
            <div class="form-group has-feedback">
                <input type="tel" name="numero_cartao_credito" id="numero_cartao_credito" class="form-control js-cartao-numero" placeholder="Número do cartão de crédito"/>
                <img class="icon-cartao" src={Visa} alt="Visa"/>
            </div>
            <div class="form-group has-feedback">
                <select name="parcelas" id="parcelas" class="form-control">
                    <option selected hidden value="">Parcelas</option>
                    <option value="01">Item 01</option>
                    <option value="02">Item 02</option>
                </select>
            </div>
            <div class="form-group has-feedback">
                <input type="text" name="nome_cartao" id="nome_cartao" class="form-control" placeholder="Nome do portador do cartão"/>
            </div>
            <div class="flex no-flex-xs">
                <div class="form-group has-feedback">
                    <input type="tel" name="mes" id="mes" class="form-control js-cartao-mes" placeholder="Mês"/>
                </div>
                <div class="form-group has-feedback">
                    <input type="tel" name="ano" id="ano" class="form-control js-cartao-ano" placeholder="Ano"/>
                </div>
            </div>
            <div class="form-group has-feedback">
                <div class="flex">
                    <input type="tel" name="numero_verificacao" id="numero_verificacao" class="form-control js-cartao-cvv" placeholder="Número de verificação (CVV)"/>
                    <img class="icon-big" src={CVV} alt="CVV"/>
                </div>
            </div>
            <div class="group-btn">
                <button type="submit" class="btn btn-full js-finalizar">Finalizar compra</button>
            </div>
        </div>
    </div>

    <div class="list">
        <div class="group-list flex">
            <div class="has-feedback">
                <div class="check-custom">
                    <div class="item">
                        <input id="boleto_bancario" type="radio" name="radio"/>
                        <label for="boleto_bancario">
                            <span class="group">
                                <h6><strong>Boleto Bancário</strong></h6>
                                <h6>R$ 70,99 a consulta</h6>
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div class="box-form-fade js-btn-boleto" style={{display:"none"}}>
            <div class="group-btn">
                <Link to="/auth/marcar-consulta-4-confirmacao" class="btn btn-full">Gerar boleto</Link>
            </div>
        </div>
    </div>

</div>
        </div>
    );
}

export default CardPagamento;
