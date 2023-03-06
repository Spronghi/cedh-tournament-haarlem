import { LitElement, html, css, type TemplateResult } from 'lit'

import { font } from './styles/commons'

export class BaseLayout extends LitElement {
  static styles = [
    font('::host'),
    css`
      :host theme-toggle {
        margin-left: 1em
      }

      :host .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        min-width: fit-content;
        margin: 1em 0;
      }

      :host ul.navbar {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
      }

      :host ul.navbar li {
        min-width: max-content;
      }

      :host ul.navbar li + li {
        border-left: solid var(--secondary-light-color) 1px;
        padding-left: 10px;
        margin-left: 10px;
      }

      :host footer ul.navbar li + li {
        border-left: solid var(--text-color) 1px;
      }

      :host footer {
        width: 100%;
        margin-top: 1em;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: var(--primary-color);
        padding: 1em 0;
      }

      .title {
        padding-left: 1em;
      }

      header .navbar {
        padding-right: 1em !important;
      }

      header section {
        display: flex;
        align-items: end;
      }

      header .logo {
        width: 25px;
        height: 25px;
        padding-right: 5px
      }

      .disclaimer {
        font-size: 8px;
        text-align: center;
        margin-top: 10px;
      }

      :host a {
        color: var(--text-color);
        text-decoration: none;
      }

      :host a:hover {
        text-decoration: underline;
      }
    `
  ]

  constructor () {
    super()

    addEventListener('resize', () => { this.requestUpdate() })
  }

  protected render (): TemplateResult {
    return html`
      <div class="container">
        <header class="header">
          
          <section aria-label="title" class="title">
            <img class="logo" src="/cedh-tournament-haarlem/logo.png" />
            cEDH Tournament
          </section>

          <ul class="navbar">
            <li><a href="#rules">Rules</a></li>
            <li><a href="#signup">Signup</a></li>
            <li><a href="#where">Where</a></li>
            <theme-toggle></theme-toggle>
          </ul>
        </header>

        <main>
          <slot></slot>
        </main>
        
        <footer>
          <ul class="navbar">
            <li><a href="#privacy">Privacy</a></li>
            <li><a href="#something">Something</a></li>
            <li><a href="#something-else">Something Else</a></li>
          </ul>

          <section section="disclaimer" class="disclaimer">
            The information presented on this site about Magic: The Gathering, both literal and graphical, is copyrighted by Wizards of the Coast. This website is not produced, endorsed, supported, or affiliated with Wizards of the Coast..
          </section>
        </footer>
      </div>
    `
  }
}

window.customElements.define('base-layout', BaseLayout)