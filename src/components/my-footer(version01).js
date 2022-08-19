// Create a class for the element
class MyFooter extends HTMLElement {
    constructor() {
      // Always call super first in constructor
      super();
      // Create a shadow root
      const shadow = this.attachShadow({mode: 'open'});
      const footer = document.createElement('footer');
      shadow.appendChild(footer);
        //creat <ol></ol>
        const ol = document.createElement('ol');
        footer.appendChild(ol);
          //create <li></li>
          const li = document.createElement('li');
          ol.appendChild(li);          
          //creat <a>1</a>
          const a1 = document.createElement('a');
          var link1 = this.getAttribute('link1');
          a1.setAttribute('href', link1);
          a1.setAttribute('target','_blank')
          var menu1 = this.getAttribute('menu1');
          a1.textContent = menu1;
          li.appendChild(a1);
  
          //creat <a>2</a>
          const li2 = document.createElement('li');
          ol.appendChild(li2); 
          const a2 = document.createElement('a');
          var link2 = this.getAttribute('link2');
          a2.setAttribute('href', link2);
          var menu2 = this.getAttribute('menu2');
          a2.textContent = menu2;
          li2.appendChild(a2);
  
          //creat <a>1</a>
          const li3 = document.createElement('li');
          ol.appendChild(li3); 
          const a3 = document.createElement('a');
          var link3 = this.getAttribute('link3');
          a3.setAttribute('href', link3);
          var menu3 = this.getAttribute('menu3');
          a3.textContent = menu3;
          li3.appendChild(a3);
  
  
      style.textContent = `
        `;
    }
    }
    
    // Define the new element
    customElements.define('my-footer-deux', MyFooter);