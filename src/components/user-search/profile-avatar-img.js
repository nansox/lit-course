import { LitElement, html, css } from 'lit-element';
import { material } from '../../utils/fonts';

class ProfileAvatarImg extends LitElement {
  static get styles() {
    return [
      material,
      css`
        :host {
          display: block;
          width: 100%;
          min-width: 86.34px;
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
      `,
    ];
  }

  static get properties() {
    return { url: { type: String } };
  }

  render() {
    return html` <img src="${this.url}" /> `;
  }
}

window.customElements.define('profile-avatar-img', ProfileAvatarImg);
