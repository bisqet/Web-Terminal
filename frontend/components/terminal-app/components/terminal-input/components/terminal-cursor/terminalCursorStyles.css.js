import {css} from "lit";

export const terminalCursorStyles = css`
      :host {
        display: inline-block;
        position: relative;
      }

      input {
        width: calc(1ch + 2px);
        animation: none;
        border: 1px var(--color-primary) solid;
        padding: 0;
        margin: 0;
        outline: none;
        background: transparent;
        color: transparent;
        cursor: text;
        box-sizing: border-box;
      }

      .focused {
        animation: blink 1s step-end infinite;
      }

      .typing {
        animation: none;
        background: var(--color-primary);
      }

      @keyframes blink {
        from,
        to {
          background: var(--color-primary);;
        }
        50% {
          background: transparent;
        }
      }
    `