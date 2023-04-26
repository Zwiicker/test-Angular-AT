class ContactsService {
  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
  }

  getContacts() {
    return this.$q( (resolve, reject) => { 
      if (this.contacts) 
        resolve(this.contacts);
      else { 
        this.$http.get('/api/contacts')
          .then( (response) => resolve(response.data) );
      }
    });
  }

  createContact(_name, _mensagem, _autor, _date) {
    return this.$http.post('/api/contacts', {name:_name, mensagem:_mensagem,autor:_autor,date:_date})
    .then( (response)=>response.data ); 
  }

  deleteContacts(){
    return this.$http.delete(`/api/contacts`)
    .then( (response)=>response.data ); 
  }
  
  deleteContact(id){
    return this.$http.delete(`/api/contacts/${id}`)
    .then( (response)=>response.data );
  }

  modifyContacts(_name, _mensagem, _autor, _date, id) {
    return this.$http.put(`/api/contacts/${id}`, {name:_name, mensagem:_mensagem, autor:_autor, date:_date})
    .then( (response)=>response.data ); 
  }
}

ContactsService.$inject = ['$http','$q'];
export default ContactsService;