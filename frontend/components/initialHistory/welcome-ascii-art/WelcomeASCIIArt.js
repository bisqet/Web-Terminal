import {html, LitElement} from "lit";
import {welcomeASCIIArtHistoryRecord} from "./welcomeASCIIArtHistoryRecord.js";

export class WelcomeASCIIArt extends LitElement {
  render() {
    return welcomeASCIIArtHistoryRecord;
  }
}

customElements.define('welcome-ascii-art', WelcomeASCIIArt);

export const historyRecordArt = {
  result: html`
    <welcome-ascii-art></welcome-ascii-art>`
};
