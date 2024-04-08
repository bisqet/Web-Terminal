import {html} from "lit";

export const firstRandomRecord = (randomNumber) => {
  return {result:html`<span>Your SSR random generated path: ${randomNumber}</span>`}
}