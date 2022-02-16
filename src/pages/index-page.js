export default function indexPage (url) {
    const index =  `
    <h1>Hello Vite!</h1>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
    <p>${url}</p>
  `
  return index;
  }