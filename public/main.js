import '../src/sass/main.scss';
import registrare from '../builders/components-loader';
import navigator from '../builders/page-navigation.js';

registrare()

function complet() {
  const h = location.hash;
  setTimeout(()=>{
    navigator();
  },10)
}
window.addEventListener('onhashchange', complet());