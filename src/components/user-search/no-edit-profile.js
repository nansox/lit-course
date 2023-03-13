import { LitElement, html, css } from 'lit-element';
import { material } from '../../utils/fonts';
import { nothing } from 'lit-html';
import './edit-profile-button.js';
import './profile-header.js';

class NoEditProfile extends LitElement {
  static get styles() {
    return [
      material,
      css`
        :host {
          display: flex;
          flex-direction: column;
          font-family: 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
        }
        .profile-bio {
          font-size: 16px;
          margin-bottom: 16px;
          color: #24292f;
          line-height: 1.5;
        }
        .profile-info {
          display: flex;
          flex-direction: column-reverse;
        }
        .profile-follow {
          margin-bottom: 16px;
        }
        .profile-follow i {
          margin-right: 0.2rem;
        }
        .profile-follow a {
          cursor: pointer;
          text-decoration: none;
          color: black;
        }
        .profile-follow a:hover {
          color: #0969da;
        }
        .profile-extra > div {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .profile-extra-link[blog] a {
          cursor: pointer;
          text-decoration: none;
          color: black;
        }
        .profile-extra-link[blog] a:hover {
          color: #0969da;
          text-decoration: underline;
        }
        @media (max-width: 767px) {
          .profile-info > div:last-child > :not(.profile-extra-link) {
            display: none;
          }
        }

        @media (min-width: 768px) {
          .profile-info {
            flex-direction: column;
          }
        }
      `,
    ];
  }

  static get properties() {
    return { info: { type: Object } };
  }

  render() {
    return html`
      <profile-header .info="${this.info}"></profile-header>
      <div class="profile-bio">${this.info.bio}</div>
      <edit-profile-button></edit-profile-button>
      <div class="profile-info">
        <div class="profile-follow">
          <a href="${this.info.followers_url}">
            <i class="material-icons"> people </i>
            <b>${this.info.followers}</b>
            <span>followers</span>
          </a>
          <span>·</span>
          <a href="${this.info.following_url}">
            <b>${this.info.following}</b>
            <span>following</span>
          </a>
        </div>
        <div class="profile-extra">
          ${this.info.company !== null
            ? html`<div>
                <i class="material-icons"> business </i>
                <span>${this.info.company}</span>
              </div>`
            : nothing}
          ${this.info.location !== null
            ? html`<div>
                <i class="material-icons"> location_on </i>
                <span>${this.info.location}</span>
              </div>`
            : nothing}
          ${this.info.email !== null
            ? html`<div>
                <i class="material-icons"> email </i>
                <span>${this.info.email}</span>
              </div>`
            : nothing}
          ${this.info.blog !== null && this.info.blog !== ''
            ? html`<div class="profile-extra-link" blog>
                <i class="material-icons"> link </i>
                <a href="${this.info.blog}">${this.info.blog}</a>
              </div>`
            : nothing}
        </div>
      </div>
    `;
  }
}

window.customElements.define('no-edit-profile', NoEditProfile);
