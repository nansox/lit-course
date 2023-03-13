import { LitElement, html, css } from 'lit-element';

class UserSearchView extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        border: 1px solid #d4d4d4;
        padding: 8px;
      }
    `;
  }

  render() {
    return html` <i class="material-icon">sentiment_satisfied_alt</i>`;
  }
}

window.customElements.define('user-search-view', UserSearchView);
