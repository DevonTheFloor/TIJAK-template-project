// first import function
import { mountingPageElements } from '../../tijak/builders/mounting-page';


// Create a class for the element
export default class SecondPage extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    mountingPageElements(
      this,
      `
      <header>
        <my-header h1-first="Second Page"></my-header>

      </header>
        <main>
          <section>
            <h2>This is the second page</h2>
            <p>The second page of this multi-pages framework Vite-vanilla-webComponents.</p>
          </section>
        </main>
        `);
    }

    connectedCallback() {}
    disconnectedCallback() {}
    adoptedCallback() {}
    attributeChangedCallback(name, oldValue, newValue) {}
    
  }
  customElements.define('second-page', SecondPage);

