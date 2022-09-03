import { insertPageInApp } from './mounting-page.js';

export function navigator(...pages) {
  const url = new URL(window.location.href),
    hach = url.hash,
    path = url.pathname;
    console.log('7');
    const pa = pages.find(p => p.uri === hach);
    console.log('9');
    console.log('PA:',pa);
    console.log('pa page: ', pa.page);
    insertPageInApp(pa.page)
    

  /*switch(hach){

    case '' :
      console.log('hach vide: ', hach);
      insertPageInApp('<index-page></index-page>');
      window.scroll(0, 0);
      break;
    case '#/' :
      console.log('hach vide: ', hach);

      insertPageInApp('<index-page></index-page>');
      window.scroll(0, 0);

      break;
    case '#/'+siteMap.uri:

      insertPageInApp(siteMap.page);

      break;
    case '#/error':

      insertPageInApp('<error-404></error-404>');
      window.scroll(0, 0);
      break;
      default:
        dQSr('#app').innerHTML = `
          <h1>ERROR 404</h1>
          <p>La page que vous cherchez n'existe pas</p>
        `;
        window.scroll(0, 0);
  }*/
}
export function activatedNavigator(...pages) {
  setTimeout(()=>{
    navigator(...pages);
  },10)
}

export function listenForHash(...pages) {
  const url = new URL(window.location.href),
    hach = url.hash;
  if(!hach) {
    window.location.assign("#/");
    activatedNavigator(...pages);
  } else {
    activatedNavigator(...pages)
  }
}
export function listenForHashInIndex(...pages) {
  window.addEventListener('hashchange',()=>{
    activatedNavigator(...pages)
  })  
}
