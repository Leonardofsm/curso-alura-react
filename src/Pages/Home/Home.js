import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './Home.css';
import PopUp from '../../Utils/PopUp';

import Header from '../../Components/Header/Header';
import Tabela from '../../Components/Tabela/Tabela';
import Form from '../../Components/Formulario/Formulario';
import ApiService from '../../Utils/ApiService';

class App extends Component {

  constructor(props){
    super(props);

      this.state = {
        autores: [],
    };
  }

  removeAutor = id  => {

    const { autores } = this.state;

    const AutoresAtualizado = autores.filter(autor => {
      return autor.id !== id;
    });
    ApiService.RemoveAutor(id)
              .then(res => {
                if(res.message === 'deleted') {
                  this.setState({autores: [...AutoresAtualizado]})
                  PopUp.exibeMensagem('success', "Autor removido com sucesso");
                }
              })
              .catch(err => PopUp.exibeMensagem('error', "Não foi possivel remover o autor."));
  }

  escutadorDeSubmit = autor => {
    ApiService.CriaAutor(JSON.stringify(autor))
              .then(res => {
                if(res.message === 'success') {
                  this.setState({ autores: [...this.state.autores, res.data] });
                  PopUp.exibeMensagem('success', "Autor adicionado com sucesso!");
                }
              })
              .catch(err => PopUp.exibeMensagem('error', "Erro na comunicação com a API ao tentar criar o autor"));
            }
          
  
  
  componentDidMount() {
    ApiService.ListaAutores()
                .then(res => {
                  if(res.message === 'success') {
                    this.setState({autores: [...this.state.autores, ...res.data]})
                  }
                })
                .catch(err =>  PopUp.exibeMensagem('error', "Não foi possivel listar o autor.")); 
            }

  render() {


    return (
      <Fragment>
        <Header />
        <h1>Casa do Código</h1>
        <div className="container mb-10">
          <Tabela autores = { this.state.autores } removeAutor = { this.removeAutor } />
          <Form escutadorDeSubmit = {this.escutadorDeSubmit} />
        </div>
      </Fragment>

    );
  }

}


export default App;
