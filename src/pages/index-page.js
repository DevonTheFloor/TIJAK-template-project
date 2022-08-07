import { isAdHl } from '../js/modules/myDomHelper';
import MyHeader from '../components/myHeader';
import GoodPractice from '../components/goodPractice';

// Create a class for the element
export default class IndexPage extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    isAdHl(this, 
      'afterbegin',
      `<my-header h1title="Your master heading here"></my-header>
        <main>
          <section>
            <good-practice></good-practice>
          </section>
          <p>To the seconde page: <a href="/second-page">Second Page</a></p>
        </main>
        `);
    }
  }

