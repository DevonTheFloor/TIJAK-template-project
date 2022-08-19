import '../src/sass/main.scss';
import registrare from '../builders/components-loader';
import navigator from '../builders/page-navigation.js';

registrare()

function activatedNavigator() {
  setTimeout(()=>{
    navigator();
  },10)
}
const url = new URL(window.location.href),
hach = url.hash;
if(!hach) {
  window.location.assign("#/");
  activatedNavigator();

} 
  window.addEventListener('hashchange',()=>{
    activatedNavigator()
  })

