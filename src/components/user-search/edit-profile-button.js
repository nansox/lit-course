import { LitElement, html, css } from 'lit-element';

class EditProfileButton extends LitElement {
  static get styles() {
    return css`
      button {
        width: 100%;
        height: 100%;
        padding: 5px 16px;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        white-space: nowrap;
        vertical-align: middle;
        cursor: pointer;
        -webkit-user-select: none;
        user-select: none;
        border: 1px solid;
        border-radius: 6px;
        margin-bottom: 16px;
        color: #24292f;
        background-color: #f6f8fa;
        border-color: rgba(27, 31, 36, 0.15);
        box-shadow: 0 1px 0 rgba(27, 31, 36, 0.04), 0 1px 0 rgba(255, 255, 255, 0.25);
        transition: 80ms cubic-bezier(0.33, 1, 0.68, 1);
        transition-property: color, background-color, box-shadow, border-color;
      }
      button:active {
        background-color: hsla(220, 14%, 93%, 1);
        border-color: rgba(27, 31, 36, 0.15);
        transition: none;
      }
      button:hover {
        background-color: #f3f4f6;
        border-color: rgba(27, 31, 36, 0.15);
        transition-duration: 0.1s;
      }
    `;
  }

  render() {
    return html` <button>Edit profile</button> `;
  }
}

window.customElements.define('edit-profile-button', EditProfileButton);
