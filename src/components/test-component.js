import TagInComponent from "../js/TagInComponent";

export default class TestComponent extends HTMLElement {
  constructor() {
    super();
    const pi = new TagInComponent('p','paraId','tested',this);
    pi.crelt();
    const ai = new TagInComponent('a', 'flink', 'mylink', this);
    ai.crelt();
  }
}