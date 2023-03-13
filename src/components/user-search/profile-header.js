import { LitElement, html, css } from 'lit-element';
import './set-profile-status.js';

class ProfileHeader extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        position: relative;
      }
      :host > div:last-child {
        padding: 16px 0;
      }
      :host > img {
        min-width: 86.34px;
        width: 100%;
        border-radius: 50%;
      }
      .profile-name {
        font-size: 24px;
        line-height: 1.25;
        font-weight: 600;
      }
      .profile-login-name {
        font-size: 20px;
        font-style: normal;
        font-weight: 300;
        line-height: 24px;
        color: #57606a;
      }

      @media (max-width: 767px) {
        :host > img {
          width: 16.67%;
          margin-right: 1rem;
        }
      }
    `;
  }

  static get properties() {
    return { info: { type: Object } };
  }

  render() {
    return html`
      <img src="${this.info.avatar_url}" />
      <div>
        <div class="profile-name">${this.info.name}</div>
        <div class="profile-login-name">${this.info.login}</div>
      </div>
      <set-profile-status></set-profile-status>
    `;
  }
}

window.customElements.define('profile-header', ProfileHeader);
