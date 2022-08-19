import '../src/sass/main.scss';
import registrare from '../builders/components-loader';
import {activatedNavigator, listenForHash} from '../builders/page-navigation.js';

registrare()


/*const url = new URL(window.location.href),
hach = url.hash;
if(!hach) {
  window.location.assign("#/");
  activatedNavigator();

} */
listenForHash()
window.addEventListener('hashchange',()=>{
  activatedNavigator()
})

