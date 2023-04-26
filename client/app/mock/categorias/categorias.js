import angular from 'angular';
import _categorias from './categorias-data';

function CategoriasMock($httpBackend, $log, storage) {
  let categorias = storage.load('categorias', _categorias);
  let _id = storage.load('categorias-index', _categorias.length+1);
  
  $httpBackend.whenGET('/api/categorias').respond( (method, url, data, headers) => {
    $log.log('Dados recebidos:', method, url, data, headers);
    return [200, categorias, {}];
  });

  $httpBackend.whenPOST('/api/categorias').respond( (method, url, data, headers) => {
    $log.log('Dados recebidos:', method, url, data, headers);
    let _data = JSON.parse(data);
    _data.id = _id++;
    categorias.push(_data);
    storage.save('categorias', categorias);
    storage.save('categorias-index', _id);
    return [200, categorias, {}];
  });

  $httpBackend.whenDELETE(/^\/api\/categorias.*$/).respond( (method, url, data, headers) => {
    $log.log('Dados recebidos:', method, url, data, headers);
    if (url === '/api/categorias') {// reseta toda a coleção
      categorias = angular.copy(_categorias);
      _id = _categorias.length+1;
      storage.load('categorias-index', _id);
    } else { //deleta um item da coleção
      let id = url.substring(14);
      for(let i=0; i<categorias.length; i++) {
        if(categorias[i].id == id){
          categorias.splice(i, 1);
          break;
        }
      }
    }
    storage.save('categorias', categorias);
    return [200, categorias, {}];
  });

  $httpBackend.whenPUT(/^\/api\/categorias.*$/).respond( (method, url, data, headers) => {
    $log.log('Dados recebidos:', method, url, data, headers);
    let _data = JSON.parse(data);
    if (url === '/api/categorias') {// atualiza toda a coleção
      categorias = _data;
    } else { //atualiza um item da coleção
      let id = url.substring(14);
      for(let i=0; i<categorias.length; i++) {
        if(categorias[i].id == id){
          categorias[i].name = _data.name;
          categorias[i].mensagem = _data.mensagem;
          break;
        }
      }
    }
    storage.save('categorias', categorias);
    return [200, categorias, {}];
  });
}

CategoriasMock.$inject = ['$httpBackend','$log','StorageService'];

export default CategoriasMock;
