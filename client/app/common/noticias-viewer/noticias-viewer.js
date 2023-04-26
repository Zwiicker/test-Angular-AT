import angular from 'angular';
import noticiasViewerComponent from './noticias-viewer.component';

let noticiasViewerModule = angular.module('noticiasViewer', [

])

.component('noticiasViewer', noticiasViewerComponent)

.name;

export default noticiasViewerModule;
