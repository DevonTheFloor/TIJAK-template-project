// first import function
import { isAdHl } from '../js/modules/myDomHelper'
import { mountingPageElements } from '../../builders/mounting-page';
//second import componan
//import MyHeader from '../components/myHeader'

// Define the new element

// Create a class for the element
export default class SecondPage extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    mountingPageElements(
      this,
      `<my-header h1title="Second Page"></my-header>
        <main>
          <section>
            <h2>This is the second page</h2>
            <p>The second page of this multi-pages framework Vite-vanilla-webComponents.</p>
          </section>
        </main>
        `);
    }
  }

