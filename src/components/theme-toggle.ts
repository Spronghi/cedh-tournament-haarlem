import { LitElement, html, css, type TemplateResult } from 'lit'

import { state } from 'lit/decorators.js'

import { type Theme } from '../types'

export class ThemeToggle extends LitElement {
  static styles = css`
    :host img {
      cursor: pointer;
      width: 18px;
      align-items: center;
      position: relative;
      top: 2px;
    }
  `

  @state() private currentTheme: Theme
  @state() private readonly prefersDarkScheme: boolean

  constructor () {
    super()

    this.prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches

    this.currentTheme = this.getDefaultTheme()
  }

  private getIconURL (): string {
    const icon = this.isDark() ? 'light' : 'dark'
    return `/cedh-tournament-haarlem/assets/${icon}-theme-icon.svg`
  }

  private getDefaultTheme (): Theme {
    const fromStorage = localStorage.getItem('cedh-tournament-theme') as Theme | null

    if (fromStorage) return fromStorage

    if (this.prefersDarkScheme) return 'dark'

    return 'light'
  }

  private isDark (): boolean {
    return this.currentTheme === 'dark'
  }

  private isLight (): boolean {
    return this.currentTheme === 'light'
  }

  private applyTheme (): void {
    localStorage.setItem('cedh-tournament-theme', this.currentTheme)

    if (this.prefersDarkScheme) {
      if (this.isDark()) {
        document.body.classList.remove('light-theme')
      }

      if (this.isLight()) {
        document.body.classList.add('light-theme')
      }
    } else {
      if (this.isDark()) {
        document.body.classList.add('dark-theme')
      }

      if (this.isLight()) {
        document.body.classList.remove('dark-theme')
      }
    }
  }

  private toggleTheme (): void {
    this.currentTheme = this.isDark() ? 'light' : 'dark'

    this.applyTheme()
  }

  protected render (): TemplateResult {
    return html`<img src="${this.getIconURL()}" @click=${this.toggleTheme} alt="Use ${this.currentTheme} theme" />`
  }
}

window.customElements.define('theme-toggle', ThemeToggle)
