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

// const INFO = {
//   login: 'vicdata4',
//   id: 25375982,
//   node_id: 'MDQ6VXNlcjI1Mzc1OTgy',
//   avatar_url: 'https://avatars.githubusercontent.com/u/25375982?v=4',
//   gravatar_id: '',
//   url: 'https://api.github.com/users/vicdata4',
//   html_url: 'https://github.com/vicdata4',
//   followers_url: 'https://api.github.com/users/vicdata4/followers',
//   following_url: 'https://api.github.com/users/vicdata4/following{/other_user}',
//   gists_url: 'https://api.github.com/users/vicdata4/gists{/gist_id}',
//   starred_url: 'https://api.github.com/users/vicdata4/starred{/owner}{/repo}',
//   subscriptions_url: 'https://api.github.com/users/vicdata4/subscriptions',
//   organizations_url: 'https://api.github.com/users/vicdata4/orgs',
//   repos_url: 'https://api.github.com/users/vicdata4/repos',
//   events_url: 'https://api.github.com/users/vicdata4/events{/privacy}',
//   received_events_url: 'https://api.github.com/users/vicdata4/received_events',
//   type: 'User',
//   site_admin: false,
//   name: 'Víctor González',
//   company: 'Banking sector',
//   blog: 'https://www.npmjs.com/~vicdata',
//   location: 'Madrid',
//   email: 'vicdata@outlook.com',
//   hireable: null,
//   bio: 'Web Developer',
//   twitter_username: null,
//   public_repos: 40,
//   public_gists: 0,
//   followers: 45,
//   following: 44,
//   created_at: '2017-01-26T21:47:24Z',
//   updated_at: '2022-09-15T07:15:15Z',
// };
