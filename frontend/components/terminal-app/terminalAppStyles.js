import {css} from "lit";

export const terminalAppStyles = css`
  * {
    font-family: var(--font-family-primary);
    font-size: var(--font-size-primary);
  }

  :host {
    background: var(--bg-color-primary);
  }

  .scrollbar::-webkit-scrollbar {
    background-color:var(--bg-color-primary);
    width:5px
  }

  /* background of the scrollbar except button or resizer */
  .scrollbar::-webkit-scrollbar-track {
    background-color:var(--bg-color-primary)
  }
  .scrollbar::-webkit-scrollbar-track:hover {
    background-color:var(--bg-color-primary);
  }

  /* scrollbar itself */
  .scrollbar::-webkit-scrollbar-thumb {
    background-color:var(--bg-color-primary);;
    border-radius:10px;
    border:1px solid var(--bg-color-secondary);
  }
  .scrollbar::-webkit-scrollbar-thumb:hover {
    cursor: auto;
    background-color:var(--bg-color-secondary);
    border:1px solid var(--bg-color-secondary);
  }

  /* set button(top and bottom of the scrollbar) */
  .scrollbar::-webkit-scrollbar-button {display:none}


  .main {
    width: 1080px;
    height: 720px;
    overflow-y: auto;
    background-color: var(--bg-color-primary);
    color: var(--color-primary);
    font-family: var(--font-family-primary);
    margin: 10px 20px;
    border-radius: 4px;
    cursor: text;
    flex-direction: column;
    display: flex;
  }

  .greeting {
    display: inline-block;

    pre {
      display: inline-block;
      margin: 1em 2ch;
    }
  }

  terminal-input {
    margin-top: auto;
  }

  @media screen and (max-width: 1070px) {
    .main {
      width: 100vw;
      height: 100vh;
      box-sizing: border-box;
      text-overflow: ellipsis;
      white-space: unset;
      overflow: hidden;
    }
  }
`