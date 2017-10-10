import angular from 'angular';
import angularMocks from 'angular-mocks';
import appModule from '../app';
import storageService from './storage.service';
import noticiasMock from './noticias/noticias';
import contactsMock from './contacts/contacts';
import categoriasMock from './categorias/categorias';

let appMockModule = angular.module('appMock', [
  appModule,
  'ngMockE2E'
])

.service('StorageService', storageService)

.run(contactsMock)
.run(categoriasMock)
.run(noticiasMock)


.name;

export default appMockModule;
