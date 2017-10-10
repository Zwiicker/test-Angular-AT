import template from './contact-editor.html'; 

let contactEditorComponent = {
  bindings: {
    contato: '< contato',
    editing: '<',
    erro: '@',
    novoContato: '&',
    modificarContato: '&'
  },
  template
};

export default contactEditorComponent;
