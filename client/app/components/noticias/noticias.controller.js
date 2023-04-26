class NoticiasController {
  constructor(NoticiasService, $state) {
    this.titulo = 'Noticias';
    this.NoticiasService = NoticiasService;
    this.$state = $state;
    NoticiasService.getNoticias()
      .then(noticias => this.noticias = noticias);
  }

  $onInit(){
    this.editing = false;
  }
  
  criarNovoNoticia() {
    delete this.noticia;
    this.editing = false;
    this.$state.go('noticias.edit');
  }
  
  novoNoticia(noticia) {
    if (noticia && noticia.name && noticia.mensagem && noticia.autor && noticia.date) {
      this.erro = 'Criando notícia';
      this.NoticiasService.createNoticia(noticia.name, noticia.mensagem, noticia.autor, noticia.date)
        .then((noticias)=>{
          this.noticias = noticias;
          this.noticia = {};
          this.erro = 'Notícia criada com sucesso!';
        });
    } else {
      this.erro = 'Título e Mensagem não podem estar vazios!';
    }
  }

  resetarNoticias() {
    this.NoticiasService.deleteNoticias()
      .then((noticias)=>{
        this.noticias = noticias;
        this.erro = 'Notícias resetadas!';
      });
  }

  deletarNoticia(){
    this.NoticiasService.deleteNoticia(this.noticia.id)
      .then((noticias)=>{
        this.noticias = noticias;
        this.erro = 'Notícia deletada!';
        this.editing = false;
        delete this.noticia;
        this.$state.go('noticias');
      });
  }

  onNoticiaClicked(noticia){
    this.noticia = angular.copy(noticia);
    this.editing = true;
    this.$state.go('noticias.detail');
  }

  modificarNoticia(){
    this.NoticiasService.modifyNoticias(this.noticia.name, this.noticia.mensagem, this.noticia.id, this.noticia.autor,this.noticia.date)
      .then((noticias)=>{
        this.noticias = noticias;
        this.erro = 'Notícia alterada!';
        this.editing = false;
        delete this.noticia;
      });
  }
}

NoticiasController.$inject = ['NoticiasService','$state'];
export default NoticiasController;
