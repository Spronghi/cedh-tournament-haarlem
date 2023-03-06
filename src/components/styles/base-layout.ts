import { css } from 'lit'

export default css`
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

  :host footer a {
    color: white;
  }

  :host ul.navbar li + li {
    border-left: solid var(--text-color) 1px;
    padding-left: 10px;
    margin-left: 10px;
  }

  :host footer ul.navbar li + li {
    border-left: solid var(white) 1px;
  }

  :host footer {
    width: 100%;
    margin-top: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    background-color: var(--primary-color);
    padding: 1em 0;
  }

  :host .title {
    padding-left: 1em;
  }

  :host header .navbar {
    padding-right: 1em !important;
  }

  :host header section {
    display: flex;
    align-items: end;
  }

  :host header .logo {
    width: 25px;
    height: 25px;
    padding-right: 5px
  }

  :host .vertical-navbar {
    position: fixed;
    color: white;
    background-color: var(--primary-color);
    right: 0px;
    padding: 2em 5em;
    margin: 0px;
    top: 0px;
    list-style: none;
    height: 100%;
  }
 
  :host .vertical-navbar theme-toggle {
    position: fixed;
    bottom: 1em;
  }

  :host .vertical-navbar li {
    padding: 1em 0;
  }

  :host .vertical-navbar a {
    color: white;
    font-size: 18px;
  }

  :host .burger-icon {
    position: fixed;
    top: 20px;
    right: 5px;
    padding-right: 1em;
    cursor: pointer;
    z-index: 2;
  }

  :host .x-icon {
    font-size: 25px;
    font-weight: bold;
    position: relative;
    right: 8px;
    bottom: 5px;
    z-index: 3;
  }

  :host .x-icon {
    color: white;
  }

  :host .burger-icon rect {
    stroke: var(--text-color);
  }

  :host .disclaimer {
    font-size: 8px;
    text-align: center;
    margin-top: 10px;
    padding: 0 3em;
  }

  :host a {
    color: var(--text-color);
    text-decoration: none;
  }

  :host a:hover {
    text-decoration: underline;
}
`
