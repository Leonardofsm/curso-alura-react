import React,{Component, Fragment} from 'react';
import Header from './Header';
import DataTable from './DataTable';

class Livros extends Component {
    constructor(props) {
        super(props);

        this.state = {
            autores: [
                {
                    nome: 'Paulo',
                    livro: 'React',
                    preco: '1000'
                },
                {
                    nome: 'Mario',
                    livro: 'Redes',
                    preco: '500'
                },
                {
                    nome: 'Cepacol',
                    livro: 'Java',
                    preco: '200'
                },
                {
                    nome: 'Azul',
                    livro: 'Tester',
                    preco: '100'
                },
                {
                    nome: 'Leo',
                    livro: 'Node',
                    preco: '1000'
                }
            ],
            titulo: 'Livros'
        }
    }

    render() {
        return (

            <Fragment>
                <Header />
                <div className="container">
                    <h1>Página de livros</h1>
                    <DataTable dados={this.state.autores} titulo={this.state.titulo} colunas={['livro']} />
                </div>
            </Fragment>
        );
    };
}


export default Livros;