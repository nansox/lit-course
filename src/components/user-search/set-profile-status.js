import { LitElement, html, css } from 'lit-element';
import { material } from '../../utils/fonts';

class SetProfileStatus extends LitElement {
  static get styles() {
    return [
      material,
      css`
        :host {
          display: flex;
          border: 1px solid #d4d4d4;
          padding: 6px;
          position: absolute;
          border-radius: 21px;
          left: 85%;
          bottom: 10%;
          background-color: white;
          color: #57606a;
          cursor: pointer;
        }
        :host(:hover) {
          color: #0969da;
        }
        span {
          min-width: 0px;
          width: 0px;
          white-space: nowrap;
          opacity: 0;
          font-size: 12px;
          line-height: 24px;
          transition: width 0.2s, opacity 0.2s;
        }

        :host(:hover) span {
          width: 60px;
          opacity: 1;
          margin-left: 6px;
        }
      `,
    ];
  }

  render() {
    return html`
      <i class="material-icons">sentiment_satisfied_alt</i>
      <span>Set Status</span>
    `;
  }
}

window.customElements.define('set-profile-status', SetProfileStatus);
