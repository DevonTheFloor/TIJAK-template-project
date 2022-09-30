import { TagInComponent } from '../../tijak/builders/TagInComponent';

export default class TestComponent extends HTMLElement {
  constructor() {
    super();
    const pi = new TagInComponent('p','paraId','tested',this, this),
      ai = new TagInComponent('a', 'flink', 'mylink', this, this),
      ssTitre = new TagInComponent('h3','test-article,',null, this, this);
  }

  connectedCallback() {}
  disconnectedCallback() {}
  adoptedCallback() {}
  attributeChangedCallback(name, oldValue, newValue) {}
}
customElements.define('test-component', TestComponent);
