import './style.css';
import deux from './pages/deux.js';
import mountPage from './js/modules/page-handler.js'
import indexPage from './pages/index-page.js'



function loadPages() {
  const url = new URL(window.location.href);
  console.log('url: ', url)
  const path = url.pathname;
  console.log('path: ', path);
  switch(path){
    case '/':
      console.log('log path', path);
      mountPage(indexPage(url));
      break;
    case '/deux':
      console.log(path);
      mountPage(deux());
      break;
      default:
        document.querySelector('#app').innerHTML = `
          <h1>ERROR 404</h1>
          <p>La page que vous cherchez n'existe pas</p>
        `
  }
}
 loadPages();