import template from './noticia-detail.html'; 

let noticiaDetailComponent = {
  bindings: {
    noticia: '< noticia',
    deletarNoticia: '&'
  },
  template
};

export default noticiaDetailComponent;
