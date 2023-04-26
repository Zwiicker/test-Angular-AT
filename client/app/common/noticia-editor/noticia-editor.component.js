import template from './noticia-editor.html'; 

let noticiaEditorComponent = {
  bindings: {
    noticia: '< noticia',
    editing: '<',
    erro: '@',
    novoNoticia: '&',
    modificarNoticia: '&'
  },
  template
};

export default noticiaEditorComponent;
