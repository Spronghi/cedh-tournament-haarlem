import { css, type CSSResult, unsafeCSS } from 'lit'

export const font = (selector: string): CSSResult => css`
  ${unsafeCSS(selector)} {
    font-family: 'Roboto Mono', monospace;
  }

  ::selection {
    background: var(--highlight-color);
  }
`
