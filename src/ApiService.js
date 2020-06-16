//import axios from 'axios';

const ApiService = {

    ListaAutores: () => {
        return fetch('http://localhost:8000/api/autor');
    },

    CriaAutor: autor => {
        return fetch('http://localhost:8000/api/autor', {method: 'POST', headers: {'content-type': 'application/json'}, body: autor});
    },
    
    ListaNomes: () => {
        return fetch('http://localhost:8000/api/autor/nome');
    },
    
    ListaLivros: () => {
        return fetch('http://localhost:8000/api/autor/livro');   
    },

    //Fazendo um GET com o AXIOS 
/*     ListaLivros: () => {
        axios.get('http://localhost:8000/api/autor/livro')
            .then(res => {
                const livros = res.livros;
            })
    }, */

    RemoveAutor: id => {
        return fetch(`http://localhost:8000/api/autor/${id}`,{method: 'DELETE', heaaders: {'content-type': 'application/json'}}); 
    },

    TrataErros: res => {
        if(!res.ok){
            throw Error(res.responseText);
        } 
        return res.json();
    }
}

export default ApiService;