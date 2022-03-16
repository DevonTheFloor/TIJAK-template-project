import { isAdHl } from '../js/modules/myDomHelper.js'
import { please } from '../strings/indexText.js';


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