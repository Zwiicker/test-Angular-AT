class ContactsController {
  constructor(ContactsService, $state) {
    this.titulo = 'Contacts';
    this.ContactsService = ContactsService;
    this.$state = $state;
    ContactsService.getContacts()
      .then(contacts => this.contacts = contacts);
  }

  $onInit(){
    this.editing = false;
  }
  
  criarNovoContato() {
    delete this.contato;
    this.editing = false;
    this.$state.go('contacts.edit');
  }
  
  novoContato(contato) {
    if (contato && contato.name && contato.mensagem && contato.autor && contato.date) {
      this.erro = 'Criando lançamento';
      this.ContactsService.createContact(contato.name, contato.mensagem, contato.autor, contato.date)
        .then((contacts)=>{
          this.contacts = contacts;
          this.contato = {};
          this.erro = 'Lançamento criadaocom sucesso!';
        });
    } else {
      this.erro = ' caixas não podem estar vazias!';
    }
  }

  resetarContatos() {
    this.ContactsService.deleteContacts()
      .then((contacts)=>{
        this.contacts = contacts;
        this.erro = 'Lançamento resetados!';
      });
  }

  deletarContato(){
    this.ContactsService.deleteContact(this.contato.id)
      .then((contacts)=>{
        this.contacts = contacts;
        this.erro = 'Lançamento deletado!';
        this.editing = false;
        delete this.contato;
        this.$state.go('contacts');
      });
  }

  onContatoClicked(contato){
    this.contato = angular.copy(contato);
    this.editing = true;
    this.$state.go('contacts.detail');
  }

  modificarContato(){
    this.ContactsService.modifyContacts(this.contato.name, this.contato.mensagem, this.contato.id, this.contato.autor,this.contato.date)
      .then((contacts)=>{
        this.contacts = contacts;
        this.erro = 'Lançamento alterado!';
        this.editing = false;
        delete this.contato;
      });
  }
}

ContactsController.$inject = ['ContactsService','$state'];
export default ContactsController;
