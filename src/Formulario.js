import React, { Component } from 'react';

class Formulario extends Component {

    constructor(props) {
        super(props);

        this.stateInitial = {
            nome: '',
            livro: '',
            preco: '',
        }

        this.state = this.stateInitial;
    }

    escutadorDeImput = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    submitFormulario = () => {
        this.props.escutadorDeSubmit(this.state);
        this.setState(this.stateInitial);
    }


    render() {

        const { nome, livro, preco } = this.state;

        return (
            <form>
                <div className="col">
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