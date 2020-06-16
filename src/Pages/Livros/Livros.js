import React,{Component, Fragment} from 'react';
import Header from '../../Components/Header/Header';
import DataTable from '../../Components/DataTable/DataTable';
import ApiService from '../../Utils/ApiService';
import PopUp from '../../Utils/PopUp';

class Livros extends Component {
    constructor(props) {
        super(props);

        this.state = {
            livros: [],
            titulo: 'Livros'
        }
    }

    componentDidMount() {
        ApiService.ListaLivros()
                  .then(res => {
                  if(res.message === 'success') {
                        this.setState({livros: [...this.state.livros, ...res.data]});
                  }  
                })
                .catch(err => PopUp.exibeMensagem('error', "Falha na comunicação na API para listar livros"));
    }

    render() {
        return (

            <Fragment>
                <Header />
                <div className="container">
                    <h1>Página de livros</h1>
                    <DataTable dados={this.state.livros} titulo={this.state.titulo} colunas={['livro']} />
                </div>
            </Fragment>
        );
    };
}


export default Livros;