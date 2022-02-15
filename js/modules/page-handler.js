export default function mountPage (page) {
    const mount = document.getElementById('app');
    mount.innerHTML = '';
    mount.insertAdjacentHTML('afterbegin',page);
}
