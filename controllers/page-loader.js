import IndexPage from '../src/pages/index-page.js';
import SecondPage from '../src/pages/secondPage.js';
import { dGEBId, dQSr } from '../src/js/modules/myDomHelper.js';

customElements.define('index-page', IndexPage);
customElements.define('second-page', SecondPage);


export default function navigator() {
  const mount = dGEBId('app');
  const url = new URL(window.location.href);
  const path = url.pathname;
  switch(path){
    case '/':
      mount.innerHTML = '';
      mount.innerHTML = '<index-page></index-page>'; 
      break;
    case '/second-page':
      mount.innerHTML = '';
      mount.innerHTML = '<second-page></second-page>'
      break;
      default:
        dQSr('#app').innerHTML = `
          <h1>ERROR 404</h1>
          <p>La page que vous cherchez n'existe pas</p>
        `
  }
}