import { dGEBId, isAdHl } from '../js/modules/myDomHelper';
import { mountingPageElements } from '../../builders/mounting-page';
import navigator from '../../builders/page-navigation';
// Create a class for the element
export default class IndexPage extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    mountingPageElements(this,
      `<my-header h1title="Your master heading here"></my-header>
        <main>
          <section>
            <good-practice></good-practice>
            <test-component 
              texte="Component created with new class TagInComponent, and the link below to and it's work"
              site="Mon Activité Web"
              url="https://monactiviteweb.fr"
            ></test-component>
          </section>
          <p>To the seconde page with Natty Link: 
          <natty-link 
            site="Seconde Page" 
            url="#/second-page" 
            choice=""
          >
          </natty-link></p>
        </main>
        `);
       
    }

    connectedCallback() {
    }
    disconnectedCallback() {

    }
    adoptedCallback() {}
    attributeChangedCallback(name, oldValue, newValue) {}
  }

