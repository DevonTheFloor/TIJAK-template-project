import { hlp } from 'tijak';
import { please } from '../strings/indexText'


export default class GoodPractice extends HTMLElement {
  constructor() {
    super();
    hlp.isAdHl(this,
      'afterbegin',
      `<article>
        ${please}
       </article>`
    )
  }
}
customElements.define('good-practice', GoodPractice);
