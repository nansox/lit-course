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
          background-color: white;
          color: #57606a;
          cursor: pointer;
        }
        span {
          font-size: 12px;
          line-height: 24px;
          white-space: nowrap;
          transition: width 0.2s, opacity 0.2s;
        }

        @media (max-width: 767px) {
          :host {
            width: 100%;
            border-radius: 6px;
            margin: 24px 0 8px 0;
          }
          span {
            margin-left: 8px;
          }
        }

        @media (min-width: 768px) {
          :host {
            position: absolute;
            border-radius: 21px;
            left: 85%;
            bottom: 35%;
          }
          span {
            min-width: 0px;
            width: 0px;
            opacity: 0;
          }
          :host(:hover) span {
            width: 60px;
            opacity: 1;
            margin-left: 6px;
          }
        }
        :host(:hover) {
          color: #0969da;
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
