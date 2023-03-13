import { LitElement, html, css } from 'lit-element';
import { styles } from '../utils/home-styles';
import '../components/common-header';
import '../components/navigation/navigation-wc.js';
import '../components/user-search/user-profile.js';

class UserSearchView extends LitElement {
  static get styles() {
    return [
      styles,
      css`
        :host > div:last-child {
          display: flex;
          align-items: center;
          justify-content: space-around;
          overflow: auto;
        }
      `,
    ];
  }

  render() {
    return html`
      <common-header></common-header>
      <navigation-wc></navigation-wc>
      <div>
        <user-profile></user-profile>
      </div>
    `;
  }
}

window.customElements.define('user-search-view', UserSearchView);
