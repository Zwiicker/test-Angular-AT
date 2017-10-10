import template from './contacts-viewer.html'; 

let contactsViewerComponent = {
  bindings: {
    contatos: '<',
    onContatoClicked: '&',
    onAddBtnClicked: '& criarNovoContato',
    resetarContatos: '&'
  },
  template
};

export default contactsViewerComponent;
