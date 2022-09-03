import { dCrEl } from '../../helpers/myDomHelper';

// Create a class for the element
export default class MyHeader extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    const shadow = this.attachShadow({mode: 'open'});
    const myheader = dCrEl('header');
    shadow.appendChild(myheader);
      //creat <h1></h1>
      const h1 = dCrEl('h1');
      myheader.appendChild(h1);
      let h1title= this.getAttribute('h1title');
      h1.textContent = h1title;
      myheader.appendChild(h1);

    }
  }

  customElements.define('my-header', MyHeader);
