import { LitElement, html, css } from 'lit-element';
import { material } from '../utils/fonts';

class LitModal extends LitElement {
  static get properties() {
    return {
      showing: { type: Array },
    };
  }

  static get styles() {
    return [
      material,
      css`
        .background {
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(0, 0, 0, 0.5);
          visibility: hidden;
          opacity: 0;
          transition: visibility 0.2s, opacity 0.2s;
          padding: 20px;
        }
        .background[open] {
          visibility: visible;
          opacity: 1;
        }
        .modal {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          width: 100%;
          background-color: white;
          font-size: 20px;
          overflow: hidden;
          margin-top: -50px;
          transition: margin-top 0.5s;
        }
        .background[open] .modal {
          margin: 0px;
        }

        @media (min-width: 800px) {
          .modal {
            width: 50%;
          }
        }
        .header {
          display: flex;
          height: 40px;
        }
        .header > button {
          margin-left: auto;
          background-color: transparent;
          border: none;
        }
        .body {
          padding: 0 40px 40px 40px;
          text-align: center;
        }
      `,
    ];
  }

  hideModal() {
    this.showing = false;
  }

  showModal() {
    this.showing = true;
  }

  render() {
    return html`
      <slot name="open"></slot>
      <div class="background" ?open="${this.showing}">
        <div class="modal">
          <div class="header">
            <button @click="${this.hideModal}">
              <i class="material-icons">close</i>
            </button>
          </div>
          <div class="body">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }
}

window.customElements.define('lit-modal', LitModal);
