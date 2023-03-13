import { LitElement, html, css } from 'lit-element';
class SearchBar extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: flex;
        }
        :host > :first-child {
          flex-grow: 1;
        }
      `,
    ];
  }

  render() {
    return html`
      <div>
        <label for="user-search-input">Github profile</label>
        <input type="text" placeholder="user name" />
      </div>
      <button>Buscar</button>
    `;
  }
}

window.customElements.define('search-bar', SearchBar);
