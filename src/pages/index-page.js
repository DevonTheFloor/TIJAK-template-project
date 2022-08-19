import { dGEBId, isAdHl } from '../js/helpers/myDomHelper';
import { mountingPageElements } from '../../builders/mounting-page';
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
          <p>To the seconde page with window event call navigator:<a href="#/second-page">SEconde Page</a></p>
        </main>
        `);
       
    }

    connectedCallback() {}
    disconnectedCallback() {

    }
    adoptedCallback() {}
    attributeChangedCallback(name, oldValue, newValue) {}
  }

