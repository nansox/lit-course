import { LitElement, html, css } from 'lit-element';
import './no-edit-profile';

class UserProfile extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        width: 100%;
      }
      @media (min-width: 768px) {
        :host {
          width: 256px;
        }
      }
      @media (min-width: 1012px) {
        :host {
          width: 296px;
        }
      }
    `;
  }

  static get properties() {
    return {
      userInfo: { type: Object },
    };
  }

  render() {
    return html`<no-edit-profile .info="${this.userInfo}"></no-edit-profile> `;
  }
}

window.customElements.define('user-profile', UserProfile);
