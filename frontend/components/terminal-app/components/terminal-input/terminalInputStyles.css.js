import {css} from "lit";

export const terminalInputStyles = css`
  :host {
    width: 100%;
    display: inline-block;
    vertical-align: middle;
    font-size: var(--font-size-primary);
    font-family: var(--font-family-primary);
  }

  input {
    padding: 0;
    outline: none;
    border: none;
    background: inherit;
    color: inherit;
    min-width: 0;
    caret-color: transparent;
    caret-shape: block;
    font-size: var(--font-size-primary);
    font-family: var(--font-family-primary);
  }

  label{
    width: -webkit-fill-available;
    display: inline-flex;
    cursor: text;
  }
`;
