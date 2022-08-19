import { dCrEl } from "../../js/helpers/myDomHelper";
import style from './my-footer-nav.scss';


export default class MyFooter extends HTMLElement {
  constructor() {
    super();
    const links = [
      { site: "", url: ""},
      { site: "", url: "" },
      { site: "", url: "" },
      { site: "", url: "" }
    ]
    const footer = dCrEl('footer');
    this.appendChild(footer);
    
// Texte du footer
    const p = dCrEl('p');
    let texte = this.getAttribute('texte');
    p.textContent = texte;
    footer.appendChild(p);

    const nav1 = dCrEl('nav');
    footer.appendChild(nav1);

    const ol1 = dCrEl('ol');
    nav1.appendChild(ol1);
    links.forEach(link => {
      this.liACreatefn(ol1, link.site, link.url)
    })
  }
  liACreatefn(olMount, site, url) {
    const li = dCrEl('li');
    olMount.appendChild(li);
    //<a></a>1
    const a = dCrEl('a')
    a.setAttribute('href', url);
    a.setAttribute('target', '_blank');
    a.textContent = site;
    li.appendChild(a);
  }
}