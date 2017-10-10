import template from './categoria-editor.html'; 

let categoriaEditorComponent = {
  bindings: {
    categoria: '< categoria',
    editing: '<',
    erro: '@',
    novoCategoria: '&',
    modificarCategoria: '&'
  },
  template
};

export default categoriaEditorComponent;
