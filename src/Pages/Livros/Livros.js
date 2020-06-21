import React,{Component, Fragment} from 'react';
import Header from '../../Components/Header/Header';
import Tabela from '../../Components/Tabela/Tabela';
import ApiService from '../../Utils/ApiService';
import PopUp from '../../Utils/PopUp';

class Livros extends Component {
    constructor(props) {
        super(props);

        this.state = {
            livros: []
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
        const campos = [{titulo: 'Livros', dado: 'livro'}]
        return (

            <Fragment>
                <Header />
                <div className="container">
                    <h1>Página de livros</h1>
                    <Tabela 
                        dados={this.state.livros} 
                        campos={campos} 
                    />
                </div>
            </Fragment>
        );
    };
}


export default Livros;