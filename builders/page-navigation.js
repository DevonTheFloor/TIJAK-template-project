import { dGEBId, dQSr } from '../src/js/modules/myDomHelper.js';

export default function navigator() {
  const mount = dGEBId('app'),
    hach = url.hash,
    url = new URL(window.location.href),
    path = url.pathname;
  switch(hach){
    case '' :
      console.log('hach vide: ', hach);
      mount.innerHTML = '<index-page></index-page>'; 
      break;
    case '#/' :
      console.log('hach vide: ', hach);
      //mount.innerHTML = '';
      mount.innerHTML = '<index-page></index-page>'; 
      break;
    case '#/second-page':
      mount.innerHTML = '';
      mount.innerHTML = '<second-page></second-page>'
      break;
    case '#/error':
      //mount.innerHTML = '';
      mount.innerHTML = '<error-404></error-404>';
      break;
      default:
        dQSr('#app').innerHTML = `
          <h1>ERROR 404</h1>
          <p>La page que vous cherchez n'existe pas</p>
        `
  }
}