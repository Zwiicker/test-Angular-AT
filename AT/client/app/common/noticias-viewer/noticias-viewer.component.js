import template from './noticias-viewer.html'; 

let noticiasViewerComponent = {
  bindings: {
    noticias: '<',
    onNoticiaClicked: '&',
    onAddBtnClicked: '& criarNovoNoticia',
    resetarNoticias: '&'
  },
  template
};

export default noticiasViewerComponent;
