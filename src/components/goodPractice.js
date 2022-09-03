import { isAdHl } from '../../helpers/myDomHelper';
import { please } from '../strings/indexText'


export default class GoodPractice extends HTMLElement {
  constructor() {
    super();
    isAdHl(this,
      'afterbegin',
      `<article>
        ${please}
       </article>`
    )
  }
}
customElements.define('good-practice', GoodPractice);
