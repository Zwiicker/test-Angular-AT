import './common.scss'; 
import angular from 'angular';
import navbarModule from './navbar/navbar';
import footerModule from './footer/footer';

import noticiasViewerModule from './noticias-viewer/noticias-viewer';
import noticiaEditorModule from './noticia-editor/noticia-editor';
import noticiaDetailModule from './noticia-detail/noticia-detail';

import contactsViewerModule from './contacts-viewer/contacts-viewer';
import contactEditorModule from './contact-editor/contact-editor';
import contactDetailModule from './contact-detail/contact-detail';

import categoriasViewerModule from './categorias-viewer/categorias-viewer';
import categoriaEditorModule from './categoria-editor/categoria-editor';
import categoriaDetailModule from './categoria-detail/categoria-detail';

let commonModule = angular.module('app.common', [
  navbarModule,
  footerModule,
  noticiasViewerModule,
  noticiaEditorModule,
  noticiaDetailModule,
  contactsViewerModule ,
  contactEditorModule ,
  contactDetailModule ,
  categoriasViewerModule ,
  categoriaEditorModule ,
  categoriaDetailModule 
])

.name;

export default commonModule;
