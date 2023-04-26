import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactsComponent from './contacts.component';
import contactsService from './contacts.service';

let contactsModule = angular.module('contacts', [
  uiRouter
])

.config(($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('contacts', {
      url: '/contacts',
      component: 'contacts'
    })
    .state('contacts.detail', {
      url: '/detail',
      template: `
        <contact-detail 
          contato="$ctrl.contato"
          deletar-contato="$ctrl.deletarContato($event)">
        </contact-detail>
      `
    })
    .state('contacts.edit', {
      url: '/edit',
      template: `
        <contact-editor
          contato="$ctrl.contato"
          editing="$ctrl.editing"
          erro="{{$ctrl.erro}}"
          novo-contato="$ctrl.novoContato($event)"
          modificar-contato="$ctrl.modificarContato($event)">
        </contact-editor>
      `
    });
})

.service('ContactsService', contactsService)

.component('contacts', contactsComponent)

.name;

export default contactsModule;
