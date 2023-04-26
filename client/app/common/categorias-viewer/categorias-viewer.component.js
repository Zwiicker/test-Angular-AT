import template from './categorias-viewer.html';

let categoriasViewerComponent = {
  bindings: {
    categorias: '<',
    onCategoriaClicked: '&',
    onAddBtnClicked: '& criarNovoCategoria',
    resetarCategorias: '&'
  },
  template
};

export default categoriasViewerComponent;
