import { LitElement, html, css } from 'lit-element';
import { nothing } from 'lit-html';
import { styles } from '../utils/home-styles';
import { spinner } from '../utils/svg-icons';
import '../components/common-header';
import '../components/navigation/navigation-wc.js';
import '../components/user-search/user-profile.js';
import '../components/user-search/search-bar';
import { getUserByName } from '../utils/api/github-users.js';

class UserSearchView extends LitElement {
  static get styles() {
    return [
      styles,
      css`
        :host > div:last-child {
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow: auto;
          padding: 1rem;
        }
      `,
    ];
  }

  static get properties() {
    return {
      userInfo: { type: Object },
      loadingFlag: { type: Boolean },
      notFoundFlag: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.userInfo = null;
    this.loadingFlag = false;
    this.notFoundFlag = false;
  }

  async getUser({ detail }) {
    try {
      this.loadingFlag = true;
      this.notFoundFlag = false;
      this.userInfo = await getUserByName(detail).then(async (response) => {
        if (!response.ok) {
          const { message = null } = await response.json();
          if (message === 'Not Found') this.notFoundFlag = true;
          return null;
        }
        return response.json();
      });
    } catch (error) {
      this.userInfo = null;
    } finally {
      this.loadingFlag = false;
    }
  }

  renderProfile() {
    if (this.loadingFlag) return spinner;
    if (this.notFoundFlag) return html`<p>El usuario no existe</p>`;
    if (this.userInfo === null) return nothing;
    return html` <user-profile .userInfo="${this.userInfo}"></user-profile> `;
  }

  render() {
    return html`
      <common-header></common-header>
      <navigation-wc></navigation-wc>
      <div>
        <search-bar @search="${this.getUser}"></search-bar>
        ${this.renderProfile()}
      </div>
    `;
  }
}

window.customElements.define('user-search-view', UserSearchView);
