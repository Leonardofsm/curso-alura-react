import React, { Component } from 'react';
import FormValidator from './FormValidator';
import PopUp from './PopUp';

class Formulario extends Component {

    constructor(props) {
        super(props);

        this.validador = new FormValidator([
            {
                campo: 'nome',
                metodo: 'isEmpty',
                validoQuando: false,
                mensagem: 'Entre com um nome'
            },
            {
                campo: 'livro',
                metodo: 'isEmpty',
                validoQuando: false,
                mensagem: 'Entre com um livro'
            },
            {
                campo: 'preco',
                metodo: 'isInt',
                args: [{min: 0, max: 99999}],
                validoQuando: true,
                mensagem: 'Entre com um valor númerico'
            }
        ]);

        this.stateInicial = {
            nome: '',
            livro: '',
            preco: '',
            validacao: this.validador.valido(),
        }

        this.state = this.stateInicial;
    }

    escutadorDeImput = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }


    //Errp mp sibmit, não envia dados para tabela
    submitFormulario = () => {

        const validacao = this.validador.valida(this.state);
        if(validacao.isValid){
            this.props.escutadorDeSubmit(this.state);
            //PopUp.exibeMensagem('success', 'Autor cadastrado com sucesso');
            this.setState(this.stateInicial);
        } else {
            const {nome, livro, preco} = validacao;
            const campos = [nome, livro, preco];
            const camposInvalidos = campos.filter(elem => {
                return elem.isInvalid;
            });
            camposInvalidos.forEach(campo => {
                PopUp.exibeMensagem('error', campo.message);
            });
        }
        
    }


    render() {

        const { nome, livro, preco } = this.state;

        return (
            <form>
                <div className="row">
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="nome">Nome</label>
                        <input
                            id="nome"
                            type="text"
                            name="nome"
                            value={nome}
                            onChange={this.escutadorDeImput}
                            className="validate"
                        />
                    </div>
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="livro">Livro</label>
                        <input
                            id="livro"
                            type="text"
                            name="livro"
                            value={livro}
                            onChange={this.escutadorDeImput}
                            className="validate"
                        />
                    </div>
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="preco">Preço</label>
                        <input
                            id="preco"
                            type="text"
                            name="preco"
                            value={preco}
                            onChange={this.escutadorDeImput}
                            className="validate"
                        />
                    </div>
                </div>

                <button className="waves-effect waves-light btn blue lighten-2" onClick={this.submitFormulario} type="button">
                    Salvar
                </button>
            </form>

        );
    }
}

export default Formulario;