import { dGEBId } from "../src/js/modules/myDomHelper"

export function mountingPageElements(mount, page) {
  mount.insertAdjacentHTML('afterbegin', page)

}

export function insertPageInApp(page) {
  const mount = dGEBId('app');
  mount.innerHTML = '';
  mount.insertAdjacentHTML('afternegin', page)
}