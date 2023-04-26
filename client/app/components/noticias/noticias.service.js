class NoticiasService {
  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
  }

  getNoticias() {
    return this.$q( (resolve, reject) => { 
      if (this.noticias) 
        resolve(this.noticias);
      else { 
        this.$http.get('/api/noticias')
          .then( (response) => resolve(response.data) );
      }
    });
  }

  createNoticia(_name, _mensagem, _autor, _date) {
    return this.$http.post('/api/noticias', {name:_name, mensagem:_mensagem,autor:_autor,date:_date})
    .then( (response)=>response.data ); 
  }

  deleteNoticias(){
    return this.$http.delete(`/api/noticias`)
    .then( (response)=>response.data ); 
  }
  
  deleteNoticia(id){
    return this.$http.delete(`/api/noticias/${id}`)
    .then( (response)=>response.data ); 
  }

  modifyNoticias(_name, _mensagem, _autor, _date, id) {
    return this.$http.put(`/api/noticias/${id}`, {name:_name, mensagem:_mensagem, autor:_autor, date:_date})
    .then( (response)=>response.data ); 
  }
}

NoticiasService.$inject = ['$http','$q'];
export default NoticiasService;