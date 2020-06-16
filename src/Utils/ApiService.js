//import axios from 'axios';

const ApiService = {

    ListaAutores: () => {
        return fetch('http://localhost:8000/api/autor')
        .then(res => ApiService.TrataErros(res))
        .then(res => res.json());

    },

    CriaAutor: autor => {
        return fetch('http://localhost:8000/api/autor', {method: 'POST', headers: {'content-type': 'application/json'}, body: autor})
        .then(res => ApiService.TrataErros(res))
        .then(res => res.json());
    },
    
    ListaNomes: () => {
        return fetch('http://localhost:8000/api/autor/nome')
        .then(res => ApiService.TrataErros(res))
        .then(res => res.json());
    },
    
    ListaLivros: () => {
        return fetch('http://localhost:8000/api/autor/livro')
        .then(res => ApiService.TrataErros(res))
        .then(res => res.json());  
    },

    //Fazendo um GET com o AXIOS 
/*     ListaLivros: () => {
        axios.get('http://localhost:8000/api/autor/livro')
            .then(res => {
                const livros = res.livros;
            })
    }, */

    RemoveAutor: id => {
        return fetch(`http://localhost:8000/api/autor/${id}`,{method: 'DELETE', heaaders: {'content-type': 'application/json'}})
        .then(res => ApiService.TrataErros(res))
        .then(res => res.json());
    },

    TrataErros: res => {
        if(!res.ok){
            throw Error(res.responseText);
        } 
        return res;
    }
}

export default ApiService;