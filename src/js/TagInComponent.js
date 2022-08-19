export default class TagInComponent{
  constructor( tag, idTag, classAtt, mountOn, getAtt) {
    this.tag = tag;
    this.idTag = idTag;
    this.classAtt = classAtt;
    this.mountOn = mountOn;
    this.getAtt = getAtt;
  }
  crelt(markup) {
    markup = document.createElement(this.tag);
    markup.id = this.idTag;
    markup.setAttribute('class', this.classAtt);
    switch (this.tag) {
      case 'p':
        this.crateAttributeForPara(markup)
      break;
    
      case 'a':
        this.createAttributeForLink(markup)
        break;
    }
    this.mountOn.appendChild(markup);


  }
  crateAttributeForPara(markup) {
    const content = this.mountOn.getAttribute('texte');
    markup.textContent = content;
  }
  createAttributeForLink(markup) {
    const site = this.mountOn.getAttribute('site'),
      url = this.mountOn.getAttribute('url'),
      choice = this.mountOn.getAttribute('choice')
    markup.textContent = site;
    markup.setAttribute('href', url);
    markup.setAttribute('target', choice);
  }


}