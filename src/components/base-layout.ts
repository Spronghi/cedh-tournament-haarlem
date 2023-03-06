import { LitElement, html, type TemplateResult } from 'lit'
import { state } from 'lit/decorators.js'

import styles from './styles/base-layout'

import burgerIcon from '../icons/burger-icon'

import { font } from './styles/commons'

export class BaseLayout extends LitElement {
  static styles = [font('::host'), styles]

  @state() private burgerIcon = burgerIcon

  constructor () {
    super()

    addEventListener('resize', () => { this.requestUpdate() })
  }

  private burgerIconClick (): void {
    const isBurger = this.burgerIcon === burgerIcon

    this.burgerIcon = isBurger ? html`<span class="x-icon">X</span>` : burgerIcon
  }

  private rightMenu (): TemplateResult {
    const isBurger = this.burgerIcon === burgerIcon

    if (isBurger) {
      return html``
    }

    return html`
      <ul class="vertical-navbar" @click="${this.burgerIconClick}">
        <li><a href="#">Home</a></li>
        <li><a href="#rules">Rules</a></li>
        <li><a href="#signup">Signup</a></li>
        <li><a href="#where">Where</a></li>
        <theme-toggle></theme-toggle>
      </ul>
    `
  }

  private linkSection (): TemplateResult {
    const listItems = html`
      <ul class="navbar">
        <li><a href="#">Home</a></li>
        <li><a href="#rules">Rules</a></li>
        <li><a href="#signup">Signup</a></li>
        <li><a href="#where">Where</a></li>
        <theme-toggle></theme-toggle>
      </ul>
    `

    if (window.innerWidth > 768) {
      return listItems
    }

    return html`<div class="burger-icon" @click=${this.burgerIconClick}>${this.burgerIcon}</div>`
  }

  protected render (): TemplateResult {
    return html`
      <div class="container">
        <header class="header">
          
          <section aria-label="title" class="title">
            <img class="logo" src="/cedh-tournament-haarlem/logo.png" />
            cEDH Tournament
          </section>

          ${this.linkSection()}
          ${this.rightMenu()}
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
