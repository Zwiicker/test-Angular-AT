class CategoriasController {
  constructor(CategoriasService, $state) {
    this.titulo = 'Categorias';
    this.CategoriasService = CategoriasService;
    this.$state = $state;
    CategoriasService.getCategorias()
      .then(categorias => this.categorias = categorias);
  }

  $onInit(){
    this.editing = false;
  }
  
  criarNovoCategoria() {
    delete this.categoria;
    this.editing = false;
    this.$state.go('categorias.edit');
  }
  
  novoCategoria(categoria) {
    if (categoria &&  categoria.name && categoria.mensagem ) {
      this.erro = 'Categoria notícia';
      this.CategoriasService.createCategoria( categoria.name, categoria.mensagem)
        .then((categorias)=>{
          this.categorias = categorias;
          this.categoria = {};
          this.erro = 'Categoria criada com sucesso!';
        });
    } else {
      this.erro = ' não podem estar vazios!';
    }
  }

  resetarCategoria() {
    this.CategoriasService.deleteCategorias()
      .then((categorias)=>{
        this.categorias = categorias;
        this.erro = 'Categoria resetadas!';
      });
  }

  deletarCategoria(){
    this.CategoriasService.deleteCategorias(this.categoria.id)
      .then((categorias)=>{
        this.categorias = categorias;
        this.erro = 'Categoria deletada!';
        this.editing = false;
        delete this.categoria;
        this.$state.go('categorias');
      });
  }

  onCategoriaClicked(categoria){
    this.categoria = angular.copy(categoria);
    this.editing = true;
    this.$state.go('categorias.detail');
  }

  modificarCategoria(){
    this.CategoriasService.modifyCategorias( this.categoria.name, this.categoria.mensagem, this.noticia.id)
      .then((categorias)=>{
        this.categorias = categorias;
        this.erro = 'Categoria alterada!';
        this.editing = false;
        delete this.categoria;
      });
  }
}

CategoriasController.$inject = ['CategoriasService','$state'];
export default CategoriasController;
