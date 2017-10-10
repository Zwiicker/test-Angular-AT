import angular from 'angular';
import _noticias from './noticias-data';

function NoticiasMock($httpBackend, $log, storage) {
  let noticias = storage.load('noticias', _noticias);
  let _id = storage.load('noticias-index', _noticias.length+1);
  
  $httpBackend.whenGET('/api/noticias').respond( (method, url, data, headers) => {
    $log.log('Dados recebidos:', method, url, data, headers);
    return [200, noticias, {}];
  });

  $httpBackend.whenPOST('/api/noticias').respond( (method, url, data, headers) => {
    $log.log('Dados recebidos:', method, url, data, headers);
    let _data = JSON.parse(data);
    _data.id = _id++;
    noticias.push(_data);
    storage.save('noticias', noticias);
    storage.save('noticias-index', _id);
    return [200, noticias, {}];
  });

  $httpBackend.whenDELETE(/^\/api\/noticias.*$/).respond( (method, url, data, headers) => {
    $log.log('Dados recebidos:', method, url, data, headers);
    if (url === '/api/noticias') {// reseta toda a coleção
      noticias = angular.copy(_noticias);
      _id = _noticias.length+1;
      storage.load('noticias-index', _id);
    } else { //deleta um item da coleção
      let id = url.substring(14);
      for(let i=0; i<noticias.length; i++) {
        if(noticias[i].id == id){
          noticias.splice(i, 1);
          break;
        }
      }
    }
    storage.save('noticias', noticias);
    return [200, noticias, {}];
  });

  $httpBackend.whenPUT(/^\/api\/noticias.*$/).respond( (method, url, data, headers) => {
    $log.log('Dados recebidos:', method, url, data, headers);
    let _data = JSON.parse(data);
    if (url === '/api/noticias') {// atualiza toda a coleção
      noticias = _data;
    } else { //atualiza um item da coleção
      let id = url.substring(50);
      for(let i=0; i<noticias.length; i++) {
        if(noticias[i].id == id){
          noticias[i].name = _data.name;
          noticias[i].mensagem = _data.mensagem;
          noticias[i].autor = _data.autor;
          noticias[i].date = _data.date;
          break;
        }
      }
    }
    storage.save('noticias', noticias);
    return [200, noticias, {}];
  });
}

NoticiasMock.$inject = ['$httpBackend','$log','StorageService'];

export default NoticiasMock;
