import angular from 'angular';
import uiRouter from 'angular-ui-router';
import categoriasComponent from './categorias.component';
import CategoriasService from './categorias.service';

let categoriasModule = angular.module('categorias', [
  uiRouter
])

.config(($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('categorias', {
      url: '/categorias',
      component: 'categorias'
    })
    .state('categorias.detail', {
      url: '/detail',
      template: `
        <categoria-detail 
          categoria="$ctrl.categoria"
          deletar-categoria="$ctrl.deletarCategoria($event)">
        </categoria-detail>
      `
    })
    .state('categorias.edit', {
      url: '/edit',
      template: `
        <categoria-editor
          categoria="$ctrl.categoria"
          editing="$ctrl.editing"
          erro="{{$ctrl.erro}}"
          novo-categoria="$ctrl.novoCategoria($event)"
          modificar-categoria="$ctrl.modificarCategoria($event)">
        </categoria-editor>
      `
    });
})

.service('CategoriasService', CategoriasService)

.component('categorias', categoriasComponent)

.name;

export default categoriasModule;
