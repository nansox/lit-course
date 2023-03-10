import { LitElement, html } from 'lit-element';
import { material } from '../utils/fonts';
import { nothing } from 'lit-html';

class NoEditProfile extends LitElement {
  static get styles() {
    return [material];
  }

  static get properties() {
    return { info: { type: Object } };
  }

  render() {
    return html`
      <div>
        <span>${this.info.name}</span>
        <span>${this.info.login}</span>
      </div>
      <div>${this.info.bio}</div>
      <button>Edit profile</button>
      <div>
        <span class="material-icons-outlined"> people </span>
        <b>${this.info.followers}</b>
        <span>followers</span>
        <span>·</span>
        <b>${this.info.following}</b>
        <span>following</span>
      </div>
      <div>
        ${this.info.company !== null
          ? html`<div>
              <span class="material-icons-outlined"> business </span>
              <span>${this.info.company}</span>
            </div>`
          : nothing}
        ${this.info.location !== null
          ? html`<div>
              <span class="material-icons-outlined"> location_on </span>
              <span>${this.info.location}</span>
            </div>`
          : nothing}
        ${this.info.email !== null
          ? html`<div>
              <span class="material-icons-outlined"> email </span>
              <span>${this.info.email}</span>
            </div>`
          : nothing}
        ${this.info.blog !== null
          ? html`<div>
              <span class="material-icons-outlined"> link </span>
              <span>${this.info.blog}</span>
            </div>`
          : nothing}
      </div>
    `;
  }
}

window.customElements.define('no-edit-profile', NoEditProfile);
