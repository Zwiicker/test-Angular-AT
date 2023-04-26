import angular from 'angular';
import uiRouter from 'angular-ui-router';
import noticiasComponent from './noticias.component';
import NoticiasService from './noticias.service';

let noticiasModule = angular.module('noticias', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('noticias', {
      url: '/',
      component: 'noticias'
    })
    .state('noticias.detail', {
      url: '/detail',
      template: `
        <noticia-detail 
          noticia="$ctrl.noticia"
          deletar-noticia="$ctrl.deletarNoticia($event)">
        </noticia-detail>
      `
    })
    .state('noticias.edit', {
      url: '/edit',
      template: `
        <noticia-editor
          noticia="$ctrl.noticia"
          editing="$ctrl.editing"
          erro="{{$ctrl.erro}}"
          novo-noticia="$ctrl.novoNoticia($event)"
          modificar-noticia="$ctrl.modificarNoticia($event)">
        </noticia-editor>
      `
    });
})

.service('NoticiasService', NoticiasService)

.component('noticias', noticiasComponent)

.name;

export default noticiasModule;
