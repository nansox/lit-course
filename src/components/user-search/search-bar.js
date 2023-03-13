import { LitElement, html, css } from 'lit-element';
class SearchBar extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: flex;
          align-items: flex-end;
          gap: 16px;
          margin: 1rem 0 2rem;
        }
        div {
          flex-grow: 1;
        }
        label {
          font-weight: 600;
          display: inline-block;
          margin-bottom: 0.5rem;
        }
        input {
          width: 100%;
          padding: 12px;
          font-size: 16px;
          box-sizing: border-box;
          border-radius: 6px;
          border: 1px solid #d4d4d4;
        }
        input:focus-visible {
          outline: 1px solid gray;
        }
        button {
          height: 46px;
          border-radius: 6px;
          border: 1px solid white;
          background-color: #0d6efd;
          color: white;
          padding: 0 12px;
        }
      `,
    ];
  }

  static get properties() {
    return {
      searchName: { type: String },
    };
  }

  constructor() {
    super();
    this.searchName = '';
  }

  get inputEl() {
    return this.shadowRoot.getElementById('user-search-input');
  }

  onInput() {
    this.searchName = this.inputEl.value;
  }

  emitSearch() {
    this.dispatchEvent(new CustomEvent('search', { detail: this.searchName }));
  }

  render() {
    return html`
      <div>
        <label for="user-search-input">Github Profile</label>
        <input
          id="user-search-input"
          type="text"
          placeholder="user name"
          @input="${this.onInput}"
          value="${this.searchName}"
        />
      </div>
      <button @click="${this.emitSearch}">Buscar</button>
    `;
  }
}

window.customElements.define('search-bar', SearchBar);
