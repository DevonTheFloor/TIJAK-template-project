import '../src/sass/main.scss';
import registrare from '../builders/components-loader';
import {activatedNavigator, listenForHash} from '../builders/page-navigation.js';

registrare()


listenForHash()
window.addEventListener('hashchange',()=>{
  activatedNavigator()
})

