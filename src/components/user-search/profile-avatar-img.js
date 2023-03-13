import { LitElement, html, css } from 'lit-element';
import './set-profile-status.js';

class ProfileAvatarImg extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        width: 100%;
        min-width: 86.34px;
        position: relative;
      }
      :host > img {
        width: 100%;
        border-radius: 50%;
        height: 100%;
      }
      @media (max-width: 767px) {
        :host {
          width: 16.67%;
          margin-right: 1rem;
        }
      }
    `;
  }

  static get properties() {
    return { url: { type: String } };
  }

  render() {
    return html`
      <set-profile-status></set-profile-status>
      <img src="${this.url}" />
    `;
  }
}

window.customElements.define('profile-avatar-img', ProfileAvatarImg);
