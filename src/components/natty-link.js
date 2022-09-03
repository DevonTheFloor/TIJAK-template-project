import { dCrEl } from '../../helpers/myDomHelper';

export default class NattyLink extends HTMLElement {
  constructor() {
    super();
    const link = dCrEl('a');
    this.createAttributeForLink(link);
    this.appendChild(link);
    link.addEventListener('click',()=>{
      this.intraNavigation()
    })
  }
  createAttributeForLink(markup) {
    const site = this.getAttribute('site'),
      url = this.getAttribute('url'),
      choice = this.getAttribute('choice')
    markup.textContent = site;
    markup.setAttribute('href', url);
    markup.setAttribute('target', choice);
  }
  intraNavigation() {
    setTimeout(()=>{
      navigator()
    },15)
  }
  connectedCallback() {}
  disconnectedCallback() {}
  adoptedCallback() {}
  attributeChangedCallback(name, oldValue, newValue) {}
}

