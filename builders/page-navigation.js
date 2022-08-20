import { dGEBId, dQSr } from '../src/js/helpers/myDomHelper.js';
import { insertPageInApp } from './mounting-page.js';

function navigator() {
  //const mount = dGEBId('app'),
  const url = new URL(window.location.href),
    hach = url.hash,
    path = url.pathname;

  switch(hach){
    case '' :
      console.log('hach vide: ', hach);
      //mount.innerHTML = '<index-page></index-page>'; 
      insertPageInApp('<index-page></index-page>');
      break;
    case '#/' :
      console.log('hach vide: ', hach);
      //mount.innerHTML = '';
      //mount.innerHTML = '<index-page></index-page>'; 
      insertPageInApp('<index-page></index-page>');

      break;
    case '#/second-page':
      //mount.innerHTML = '';
      //mount.innerHTML = '<second-page></second-page>'
      insertPageInApp('<second-page></second-page>');

      break;
    case '#/error':
      //mount.innerHTML = '';
      //mount.innerHTML = '<error-404></error-404>';
      insertPageInApp('<error-404></error-404>');
      break;
      default:
        dQSr('#app').innerHTML = `
          <h1>ERROR 404</h1>
          <p>La page que vous cherchez n'existe pas</p>
        `
  }
}
export function activatedNavigator() {
  setTimeout(()=>{
    navigator();
  },10)
}

export function listenForHash() {
  const url = new URL(window.location.href),
    hach = url.hash;
  if(!hach) {
    window.location.assign("#/");
    activatedNavigator();
  } else {
    activatedNavigator()
  }
}