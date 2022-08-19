import { isAdHl } from '../js/modules/myDomHelper';
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
              texte="Coucou ça marche et ils flottent tous en bas !!!"
              site="Mon Activité Web"
              url="https://monactiviteweb.fr"
            ></test-component>
          </section>
          <p>To the seconde page: <a href="#/second-page">Second Page</a></p>
        </main>
        `);
    }
  }

