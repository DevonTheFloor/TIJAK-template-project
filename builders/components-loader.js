import IndexPage from '../src/pages/index-page';
import MyHeader from '../src/components/myHeader';
import GoodPractice from '../src/components/goodPractice';
import TestComponent from '../src/components/test-component';
import SecondPage from '../src/pages/secondPage';

export default function registrare() {
  customElements.define('my-header', MyHeader);
  customElements.define('index-page', IndexPage);
  customElements.define('good-practice', GoodPractice);
  customElements.define('test-component', TestComponent);
  customElements.define('second-page', SecondPage);
}