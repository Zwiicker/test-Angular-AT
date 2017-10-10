import angular from 'angular';
import noticiasModule from './noticias/noticias';
import contactsModule from './contacts/contacts';
import categoriasModule from './categorias/categorias';


let componentModule = angular.module('app.components', [
  noticiasModule,
 contactsModule,
  categoriasModule,
])
  
.name;

export default componentModule;
