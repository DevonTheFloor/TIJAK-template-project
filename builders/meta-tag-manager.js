import { dCrEl, dQySr } from "../src/js/helpers/myDomHelper"

export function defineNewTitle(newTitle) {
  dQySr('title').innerHTML = newTitle ;
}

export function defineMetaTagsPage(ogTags, cardTags) {
  const header = dQySr('head');
  ogTags.forEach(data => {
    const meta = dCrEl('meta');
    meta.setAttribute('property', `${data.value}`);
    meta.setAttribute('content', `${data.content}`);
    header.appendChild(meta);
  });
  cardTags.forEach(data => {
    const meta = dCrEl('meta');
    meta.setAttribute('name', `${data.value}`);
    meta.setAttribute('content', `${data.content}`);
    header.appendChild(meta);
  })
}

    /*[
      { value: "og:title", content: ""},
      { value: "og:type", content: ""},
      { value: "og:url", content: ""},
      { value: "og:image", content: ""},
      { value: "og:description", content: ""}
    ],
      //card
    [
      {value: "twitter:image", content: ""},
      { value: "description", content: ""}
      
    ]*/