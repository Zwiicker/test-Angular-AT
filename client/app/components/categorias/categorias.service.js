class CategoriasService {
  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
  }

  getCategorias() {
    return this.$q( (resolve, reject) => { 
      if (this.categorias) 
        resolve(this.categorias);
      else { 
        this.$http.get('/api/categorias')
          .then( (response) => resolve(response.data) );
      }
    });
  }

  createCategoria(_name, _mensagem) {
    return this.$http.post('/api/categorias', {name:_name, mensagem:_mensagem})
    .then( (response)=>response.data ); 
  }

  deleteCategorias(){
    return this.$http.delete(`/api/categorias`)
    .then( (response)=>response.data ); 
  }
  
  deleteCategoria(id){
    return this.$http.delete(`/api/categorias/${id}`)
    .then( (response)=>response.data ); 
  }

  modifyCategorias(_name, _mensagem, id) {
    return this.$http.put(`/api/categorias/${id}`, {name:_name, mensagem:_mensagem})
    .then( (response)=>response.data ); 
  }
}

CategoriasService.$inject = ['$http','$q'];
export default CategoriasService;