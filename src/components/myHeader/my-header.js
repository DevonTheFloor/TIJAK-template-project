import './my-header.scss';
import { TagInComponent } from '../../../tijak/builders/TagInComponent';
//import hero from '../../assets/hero.png';
import { dGEBId } from '../../../tijak/helpers/myDomHelper';

export default class MyHeader extends HTMLElement {
  constructor() {
    super();
    const hero = new TagInComponent('img', 'hero', 'hero', this, this),
      hun = new TagInComponent('h1','first', 'first', this, this),
      hde = new TagInComponent('h2', 'sst1', 'sous-titre', this, this);

    //dGEBId('hero').src = hero;
  }
  connectedCallback() {}
}

customElements.define('my-header', MyHeader);